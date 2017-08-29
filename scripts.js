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
            // We can use jQuery 1.4.2 here
            var form = $("<form/>",
                {
                    onsubmit: 'submitForm();return false;'
                }
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
                        name: 'number',
                        style: 'width:100%'
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
                        name: 'class',
                        style: 'width:100%'
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
                        name: 'yar',
                        style: 'width:100%'
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
                        name: 'city',
                        style: 'width:100%'
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
                        name: 'phone',
                        style: 'width:100%'
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
                        name: 'insur',
                        style: 'width:100%'
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
                        name: 'insurupto',
                        style: 'width:100%'
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
                        name: 'team',
                        style: 'width:100%'
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
                        name: 'userinfo',
                        style: 'width:100%'
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
                        name: 'reginfo',
                        style: 'width:100%'
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
                        value: 'Добавить фото',
                        style: 'width:100%'
                    }
                )
            );

            form.append(
                $("<input>",
                    {
                        type: 'submit',
                        value: 'Регистрация',
                        style: 'width:100%'
                    }
                )
            );

            $("#race_reg").append(form);
        });
    }

})(); // We call our anonymous function immediately


function submitForm() {
    alert('1');
}