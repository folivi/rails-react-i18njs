I18n.translations || (I18n.translations = {});
I18n.translations["pt"] = I18n.extend((I18n.translations["pt"] || {}), {"activemodel":{"errors":{"messages":{"invalid":"is invalid","invalid_event":"cannot transition when %{state}","invalid_transition":"cannot transition via \"%{event}\""}}},"activerecord":{"errors":{"messages":{"invalid":"is invalid","invalid_event":"cannot transition when %{state}","invalid_transition":"cannot transition via \"%{event}\"","record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"many":"Cannot delete record because dependent %{record} exist","one":"Cannot delete record because a dependent %{record} exists"}}}},"date":{"abbr_day_names":["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],"abbr_month_names":[null,"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],"day_names":["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],"formats":{"default":"%d/%m/%Y","long":"%d de %B de %Y","short":"%d de %B"},"month_names":[null,"Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"aproximadamente 1 hora","other":"aproximadamente %{count} horas"},"about_x_months":{"one":"aproximadamente 1 mês","other":"aproximadamente %{count} meses"},"about_x_years":{"one":"aproximadamente 1 ano","other":"aproximadamente %{count} anos"},"almost_x_years":{"one":"quase 1 ano","other":"quase %{count} anos"},"half_a_minute":"meio minuto","less_than_x_minutes":{"one":"menos de um minuto","other":"menos de %{count} minutos"},"less_than_x_seconds":{"one":"menos de 1 segundo","other":"menos de %{count} segundos"},"over_x_years":{"one":"mais de 1 ano","other":"mais de %{count} anos"},"x_days":{"one":"1 dia","other":"%{count} dias"},"x_minutes":{"one":"1 minuto","other":"%{count} minutos"},"x_months":{"one":"1 mês","other":"%{count} meses"},"x_seconds":{"one":"1 segundo","other":"%{count} segundos"}},"prompts":{"day":"Dia","hour":"Hora","minute":"Minuto","month":"Mês","second":"Segundo","year":"Ano"}},"devise":{"confirmations":{"confirmed":"A sua conta foi confirmada com sucesso.","send_instructions":"Dentro de alguns minutos irá receber um email com instruções para confirmar a sua conta.","send_paranoid_instructions":"Se o seu email existir na nossa base de dados, irá receber dentro de alguns minutos um email com instruções para confirmar a sua conta."},"failure":{"already_authenticated":"Já se encontra autenticado.","inactive":"A sua conta ainda não foi activada.","invalid":"O endereço de email ou a palavra-passe são inválidos.","last_attempt":"Tem mais uma tentativa antes da sua conta ser bloqueada.","locked":"A sua conta está bloqueada.","not_found_in_database":"O endereço de email ou a palavra-passe são inválidos.","timeout":"A sua sessão expirou, por favor autentique-se novamente para continuar.","unauthenticated":"Antes de continuar tem de se autenticar ou efectuar um registo.","unconfirmed":"Tem de confirmar a sua conta antes de continuar."},"mailer":{"confirmation_instructions":{"subject":"Instruções de confirmação"},"reset_password_instructions":{"subject":"Instruções de recuperação de palavra-passe"},"unlock_instructions":{"subject":"Instruções de desbloqueio"}},"omniauth_callbacks":{"failure":"Não foi possível autenticar a sua conta por %{kind} porque \"%{reason}\".","success":"A sua conta foi autenticada por %{kind} com sucesso."},"passwords":{"no_token":"Não pode aceder a esta página sem vir do email de redefinição da senha. Se vem dum email para redefinir a senha, por favor certifique-se que usou o URL completo que foi enviado.","send_instructions":"Dentro de alguns minutos irá receber um email com instruções de reinicialização da palavra-passe.","send_paranoid_instructions":"Se o seu e-mail existir na nossa base de dados, irá receber dentro de alguns minutos um e-mail com instruções para recuperar a sua senha.","updated":"A sua palavra-passe foi alterada com sucesso. Agora está autenticado.","updated_not_active":"A sua password foi alterada com sucesso."},"registrations":{"destroyed":"A sua conta foi cancelada com sucesso.","signed_up":"Bemvindo! A autenticação foi efectuada com sucesso.","signed_up_but_inactive":"Registou-se com sucesso. No entanto, não podemos iniciar a sua sessão porque ainda não confirmou a sua conta.","signed_up_but_locked":"Registou-se com sucesso. No entanto, não podemos iniciar a sua sessão porque a sua conta encontra-se bloqueada.","signed_up_but_unconfirmed":"Foi enviado um email com um link para confirmar o seu email. Por favor abra o link para activar a sua conta.","update_needs_confirmation":"A sua conta foi actualizada com sucesso, mas precisamos de confirmar o seu email. Por favor veja o seu email e clique no link para finalizar a confirmação do seu email.","updated":"A sua conta foi actualizada com sucesso."},"sessions":{"already_signed_out":"Sessão terminada com sucesso.","signed_in":"Autenticação efectuada com sucesso.","signed_out":"Saiu da sessão com sucesso."},"unlocks":{"send_instructions":"Dentro de alguns minutos irá receber um email com as instruções para desbloquear a sua conta.","send_paranoid_instructions":"Se a sua conta existir, irá receber dentro de alguns minutos um email com instruções para a desbloquear.","unlocked":"A sua conta foi desbloqueada com sucesso. Por favor autentique-se para continuar."}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"tem de ser aceite","already_confirmed":"já foi confirmado, por favor tente efectuar a autenticação","blank":"não pode estar em branco","carrierwave_download_error":"could not be downloaded","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_processing_error":"failed to be processed","confirmation":"não coincide com a confirmação","confirmation_period_expired":"necessitava de confirmação até %{period}, por favor faça um novo pedido","empty":"não pode estar vazio","equal_to":"tem de ser igual a %{count}","even":"tem de ser par","exclusion":"é reservado","expired":"expirou, por favor solicite um novo","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","greater_than":"tem de ser maior que %{count}","greater_than_or_equal_to":"tem de ser maior ou igual a %{count}","inclusion":"não está incluído na lista","invalid":"é inválido","less_than":"tem de ser menor que %{count}","less_than_or_equal_to":"tem de ser menor ou igual a %{count}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","not_a_number":"não é um número","not_an_integer":"tem de ser um inteiro","not_found":"não foi encontrado","not_locked":"não foi bloqueado","not_saved":{"one":"1 erro impediu %{resource} de ser gravado:","other":"%{count} erros impediram %{resource} de ser gravado:"},"odd":"tem de ser ímpar","other_than":"must be other than %{count}","present":"must be blank","record_invalid":"A validação falhou: %{errors}","restrict_dependent_destroy":{"many":"Cannot delete record because dependent %{record} exist","one":"Cannot delete record because a dependent %{record} exists"},"rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","taken":"não está disponível","too_long":"é demasiado grande (o máximo é de %{count} caracteres)","too_short":"é demasiado pequeno (o mínimo é de %{count} caracteres)","wrong_length":"comprimento errado (deve ter %{count} caracteres)"},"template":{"body":"Por favor, verifique os seguintes campos:","header":{"one":"Não foi possível guardar %{model}: 1 erro","other":"Não foi possível guardar %{model}: %{count} erros"}}},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"hello":"Hello people","helpers":{"page_entries_info":{"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Por favor seleccione"},"submit":{"create":"Criar %{model}","submit":"Gravar %{model}","update":"Actualizar %{model}"}},"i18n":{"plural":{"keys":["one","other"],"rule":{}}},"number":{"currency":{"format":{"delimiter":" ","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"€"}},"format":{"delimiter":".","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"one":"mil milhões","other":"mil milhões"},"million":{"one":"milhão","other":"milhões"},"quadrillion":{"one":"mil biliões","other":"mil biliões"},"thousand":"mil","trillion":{"one":"bilião","other":"biliões"},"unit":""}},"format":{"delimiter":"","precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"support":{"array":{"last_word_connector":", e","two_words_connector":" e ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%A, %d de %B de %Y, %H:%Mh","long":"%A, %d de %B de %Y, %H:%Mh","short":"%d/%m, %H:%M hs"},"pm":"pm"},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});
