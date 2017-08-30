(function () {

    // Localize jQuery variable
    var jQuery;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src",
            "https://code.jquery.com/jquery-3.2.1.slim.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else { // Other browsers
            script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        main();
    }

    /******** Our main function ********/

    function main() {
        jQuery(document).ready(function ($) {

            $(`<style type='text/css'> 
            #race_reg {
                padding: 15px;
                background-color: lightgray;
                border: 1px solid gray;
                border-radius: 15px;
            }
            #race_reg input{ 
                width:100%;
                background-color: #e6cece;
                border: 1px solid gray;
            } 
            #race_reg input:hover, #race_reg input:focus, #race_reg input:not(:placeholder-shown){ 
                background-color: white;
            } 
            #race_reg * {
                font-family: Verdana;
            }
            </style>`).appendTo("head");

            var form = $("<form/>",
                {
                    onsubmit: 'submitForm();return false;'
                }
            );

            form.append(
                $("<label>", { for: 'fio' }).text('ФИО:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'fio',
                        type: 'text',
                        placeholder: 'ФИО',
                        name: 'fio'
                    }
                )
                .keyup(function(){
                    console.log('value changed');
                })
            );

            form.append(
                $("<label>", { for: 'number' }).text('Бортовой номер:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'number',
                        type: 'text',
                        placeholder: 'Бортовой номер',
                        name: 'number'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'class' }).text('Класс:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'class',
                        type: 'text',
                        placeholder: 'Класс',
                        name: 'class'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'yar' }).text('Год рождения:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'yar',
                        type: 'text',
                        placeholder: 'Год рождения',
                        name: 'yar'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'city' }).text('Город:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'city',
                        type: 'text',
                        placeholder: 'Город',
                        name: 'city'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'phone' }).text('Телефон:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'phone',
                        type: 'text',
                        placeholder: 'Телефон',
                        name: 'phone'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'insur' }).text('Страховка:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'insur',
                        type: 'text',
                        placeholder: 'Страховка',
                        name: 'insur'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'insurupto' }).text('Страховка до:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'insurupto',
                        type: 'text',
                        placeholder: 'Страховка до',
                        name: 'insurupto'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'team' }).text('Команда:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'team',
                        type: 'text',
                        placeholder: 'Команда',
                        name: 'team'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'userinfo' }).text('Инфо о участнике:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'userinfo',
                        type: 'text',
                        placeholder: 'Инфо о участнике',
                        name: 'userinfo'
                    }
                )
            );

            form.append(
                $("<label>", { for: 'reginfo' }).text('Инфо о регистрации:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'reginfo',
                        type: 'text',
                        placeholder: 'Инфо о регистрации',
                        name: 'reginfo'
                    }
                )
            );


            form.append(
                $("<label>", { for: 'foto' }).text('Фото участника:')
            );
            form.append(
                $("<input>",
                    {
                        id: 'foto',
                        type: 'file',
                        value: 'Добавить фото'
                    }
                )
            );

            form.append(
                $("<input>",
                    {
                        type: 'submit',
                        value: 'Регистрация'
                    }
                )
            );

            $("#race_reg").append(form);
        });
    }

})();


function submitForm() {
    alert('1');
}