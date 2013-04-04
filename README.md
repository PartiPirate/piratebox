piratebox
=========

Mise en place d'une piratebox avec l'interface réalisée pour le Parti Pirate. 
Ce dépot contient tout le nécessaire pour l'installation, la configuration et la communication autour des piratebox du Parti Pirate. 

Les interfaces et documents de communications présentées dans cette version 1.0 illustrent uniquement notre action http://www.404democracynotfound.org 


Le projet à moyen terme
=======================

Face aux délais pour la réalisation de la piratebox pour l'événement 404, la solution pythonLight / lightHttp a été retenue. A terme, il est envisagée de passer sur du nginx/php. Solution à priori plus légère et plus facile à personnaliser. 
Niveau interface, du HTML5 responsive avec une utilisation massive de javascript (jquery) sera encourragée pour limiter les volumes de transferts et faciliter la navigations sur téléphone mobile. 

A terme, les fonctionnalités devrait se tourner vers une utilisation politique et culturelle de l'outil en vu de servir les actions de communications du Parti Pirate sous un angle différent. A la différence d'un "tractage", il est non intrusif tout en apportant une dose de subversivité tout à fait approprié à la diffusion d'idée hors-cadre. 





Installation sur TL Link MR 3040
================================

* Tout d'abord, il faut télécharger sur une clef USB vierge en fat32 ce dépot avec git
* Si jamais la piratebox est déjà configurée, il est préférable de reflasher le firmware pour repartir d'une installation vierge :
** cd /tmp
** cp /mnt/usb/piratebox/firmwares/mr3040/origin/mr3040v1_*.bin
** mtd -r write mr3040v1_*.bin firmware
* Ensuite il faut suivre le tutoriel présenté ici jusqu'à l'étape 14 (de préférence) : http://pirateboxfr.com/tutoriel-mr-3040/ (ou ici http://www.disk91.com/2012/technology/systems/installation-of-a-piratebox-on-t-link-mr3040/ )

Les actions qui suivent sont temporaire en attendant qu'un problème de configuration avec /etc/piratebox.common soit résolu

* Après reboot, il faut modifier /etc/config/wireless pour changer le nom du wifi en 404DemocracyNotFound#1 (ou un autre numéro s'il y a plusieur box)
* cd /opt/piratebox/www/
* rm -r chat.html favicon.ico forum.html index.html jquery.min.js piratebox-logo* style.css cgi-bi
n/psoread.py cgi-bin/psowrte.py board/ 
* cp /mnt/usb/piratebox/www/index.html index.html
* ln -s /mnt/usb/piratebox/www/dnf dnf
* ln -s /mnt/usb/piratebox/www/statics/ statics
* ln -s /mnt/usb/piratebox/www/favicon.ico favicon.ico
* cp /mnt/usb/piratebox/www/dnf/cgi-bin/* cgi-bin/.
* chmod 777 . -R && chown nobody:nogroup . -R (qq warning : pas d'inquiétudes)
* vérifiez l'heure : date  (et éventuellement, corrigez : date -s "2013-04-04 06:00:00" Attention, heure en UTC donc -2h)


Installation sur TL Link MR 3020
================================

TODO
