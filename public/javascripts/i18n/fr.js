I18n.translations || (I18n.translations = {});
I18n.translations["fr"] = I18n.extend((I18n.translations["fr"] || {}), {"activemodel":{"errors":{"messages":{"invalid":"is invalid","invalid_event":"cannot transition when %{state}","invalid_transition":"cannot transition via \"%{event}\""}}},"activerecord":{"errors":{"messages":{"invalid":"is invalid","invalid_event":"cannot transition when %{state}","invalid_transition":"cannot transition via \"%{event}\"","record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"many":"Cannot delete record because dependent %{record} exist","one":"Cannot delete record because a dependent %{record} exists"}}}},"date":{"abbr_day_names":["dim","lun","mar","mer","jeu","ven","sam"],"abbr_month_names":[null,"jan.","fév.","mar.","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],"day_names":["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],"formats":{"default":"%d/%m/%Y","long":"%e %B %Y","short":"%e %b"},"month_names":[null,"janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"environ une heure","other":"environ %{count} heures"},"about_x_months":{"one":"environ un mois","other":"environ %{count} mois"},"about_x_years":{"one":"environ un an","other":"environ %{count} ans"},"almost_x_years":{"one":"presqu'un an","other":"presque %{count} ans"},"half_a_minute":"une demi-minute","less_than_x_minutes":{"one":"moins d'une minute","other":"moins de %{count} minutes","zero":"moins d'une minute"},"less_than_x_seconds":{"one":"moins d'une seconde","other":"moins de %{count} secondes","zero":"moins d'une seconde"},"over_x_years":{"one":"plus d'un an","other":"plus de %{count} ans"},"x_days":{"one":"1 jour","other":"%{count} jours"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 mois","other":"%{count} mois"},"x_seconds":{"one":"1 seconde","other":"%{count} secondes"}},"prompts":{"day":"Jour","hour":"Heure","minute":"Minute","month":"Mois","second":"Seconde","year":"Année"}},"devise":{"confirmations":{"confirmed":"Votre compte a été confirmé avec succès.","send_instructions":"Vous allez recevoir sous quelques minutes un courriel comportant des instructions pour confirmer votre compte.","send_paranoid_instructions":"Si votre courriel existe sur notre base de données, vous recevrez sous quelques minutes un message avec des instructions pour confirmer votre compte."},"failure":{"already_authenticated":"Vous êtes déjà connecté(e).","inactive":"Votre compte n’est pas encore activé.","invalid":"Courriel ou mot de passe incorrect.","last_attempt":"Il vous reste une chance avant que votre compte soit bloqué.","locked":"Votre compte est verrouillé.","not_found_in_database":"Courriel ou mot de passe incorrect.","timeout":"Votre session est périmée, veuillez vous reconnecter pour continuer.","unauthenticated":"Vous devez vous connecter ou vous enregistrer pour continuer.","unconfirmed":"Vous devez confirmer votre compte par courriel."},"mailer":{"confirmation_instructions":{"subject":"Instructions de confirmation"},"reset_password_instructions":{"subject":"Instructions pour changer le mot de passe"},"unlock_instructions":{"subject":"Instructions pour déverrouiller le compte"}},"omniauth_callbacks":{"failure":"Nous ne pouvons pas vous authentifier depuis %{kind} pour la raison suivante : '%{reason}'.","success":"Autorisé avec succès par votre compte %{kind}."},"passwords":{"no_token":"Vous ne pouvez pas accéder à cette page si vous n’y accédez pas depuis un courriel de réinitialisation de mot de passe. Si vous venez en effet d’un tel courriel, vérifiez que vous avez copié l’adresse URL en entier.","send_instructions":"Vous allez recevoir sous quelques minutes un courriel vous indiquant comment réinitialiser votre mot de passe.","send_paranoid_instructions":"Si votre courriel existe dans notre base de données, vous recevrez un lien vous permettant de récupérer votre mot de passe.","updated":"Votre mot de passe a été modifié avec succès. Vous êtes maintenant connecté(e).","updated_not_active":"Votre mot de passe a été modifié avec succès."},"registrations":{"destroyed":"Au revoir ! Votre compte a été annulé avec succès. Nous espérons vous revoir bientôt.","signed_up":"Bienvenue ! Vous vous êtes enregistré(e) avec succès.","signed_up_but_inactive":"Vous vous êtes enregistré(e) avec succès. Cependant, nous n’avons pas pu vous connecter car votre compte n’a pas encore été activé.","signed_up_but_locked":"Vous vous êtes enregistré(e) avec succès. Cependant, nous n’avons pas pu vous connecter car votre compte est verrouillé.","signed_up_but_unconfirmed":"Un message avec un lien de confirmation vous a été envoyé par mail. Veuillez suivre ce lien pour activer votre compte.","update_needs_confirmation":"Vous avez modifié votre compte avec succès, mais nous devons vérifier votre nouvelle adresse de courriel. Veuillez consulter vos courriels et cliquer sur le lien de confirmation pour confirmer votre nouvelle adresse.","updated":"Votre compte a été modifié avec succès."},"sessions":{"already_signed_out":"Déconnecté(e).","signed_in":"Connecté(e) avec succès.","signed_out":"Déconnecté(e) avec succès."},"unlocks":{"send_instructions":"Vous allez recevoir sous quelques minutes un courriel comportant des instructions pour déverrouiller votre compte.","send_paranoid_instructions":"Si votre courriel existe sur notre base de données, vous recevrez sous quelques minutes un message avec des instructions pour déverrouiller votre compte.","unlocked":"Votre compte a été déverrouillé avec succès. Veuillez vous connecter."}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"doit être accepté(e)","already_confirmed":"a déjà été confirmé(e)","blank":"doit être rempli(e)","carrierwave_download_error":"could not be downloaded","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_processing_error":"failed to be processed","confirmation":"ne concorde pas avec %{attribute}","confirmation_period_expired":"doit être confirmé(e) en %{period}, veuillez en demander un(e) autre","empty":"doit être rempli(e)","equal_to":"doit être égal à %{count}","even":"doit être pair","exclusion":"n'est pas disponible","expired":"est périmé, veuillez en demander un autre","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","greater_than":"doit être supérieur à %{count}","greater_than_or_equal_to":"doit être supérieur ou égal à %{count}","inclusion":"n'est pas inclus(e) dans la liste","invalid":"n'est pas valide","less_than":"doit être inférieur à %{count}","less_than_or_equal_to":"doit être inférieur ou égal à %{count}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","not_a_number":"n'est pas un nombre","not_an_integer":"doit être un nombre entier","not_found":"n’a pas été trouvé(e)","not_locked":"n’était pas verrouillé(e)","not_saved":{"one":"une erreur a empêché ce (ou cette) %{resource} d’être enregistré(e) :","other":"%{count} erreurs ont empêché ce (ou cette) %{resource} d’être enregistré(e) :"},"odd":"doit être impair","other_than":"doit être différent de %{count}","present":"doit être vide","record_invalid":"La validation a échoué : %{errors}","restrict_dependent_destroy":{"many":"Suppression impossible: d'autres enregistrements sont liés","one":"Suppression impossible: un autre enregistrement est lié"},"rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","taken":"n'est pas disponible","too_long":{"one":"est trop long (pas plus d'un caractère)","other":"est trop long (pas plus de %{count} caractères)"},"too_short":{"one":"est trop court (au moins un caractère)","other":"est trop court (au moins %{count} caractères)"},"wrong_length":{"one":"ne fait pas la bonne longueur (doit comporter un seul caractère)","other":"ne fait pas la bonne longueur (doit comporter %{count} caractères)"}},"template":{"body":"Veuillez vérifier les champs suivants : ","header":{"one":"Impossible d'enregistrer ce(tte) %{model} : 1 erreur","other":"Impossible d'enregistrer ce(tte) %{model} : %{count} erreurs"}}},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"hello":"Bonjour mec","helpers":{"page_entries_info":{"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Veuillez sélectionner"},"submit":{"create":"Créer un(e) %{model}","submit":"Enregistrer ce(tte) %{model}","update":"Modifier ce(tte) %{model}"}},"i18n":{"plural":{"keys":["one","other"],"rule":{}},"transliterate":{"rule":{"À":"A","Â":"A","Æ":"Ae","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Î":"I","Ï":"I","Ô":"O","Ù":"U","Û":"U","Ü":"U","à":"a","â":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","î":"i","ï":"i","ô":"o","ù":"u","û":"u","ü":"u","ÿ":"y","Œ":"Oe","œ":"oe","Ÿ":"Y"}}},"number":{"currency":{"format":{"delimiter":" ","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"€"}},"format":{"delimiter":" ","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"milliard","million":"million","quadrillion":"million de milliards","thousand":"millier","trillion":"billion","unit":""}},"format":{"delimiter":"","precision":2,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"octet","other":"octets"},"gb":"Go","kb":"ko","mb":"Mo","tb":"To"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"support":{"array":{"last_word_connector":" et ","two_words_connector":" et ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%d %B %Y %Hh %Mmin %Ss","long":"%A %d %B %Y %Hh%M","short":"%d %b %Hh%M"},"pm":"pm"},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
