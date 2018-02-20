// Forms

[].forEach.call(document.querySelectorAll('.form-group input.form-field'), function(el) {
    el.addEventListener('focus', function() {
        el.parentNode.classList.add('focus');
    });
    el.addEventListener('blur', function() {
        el.parentNode.classList.remove('focus');
    });
});

[].forEach.call(document.querySelectorAll('.form-file-field input'), function(el) {
    el.addEventListener('change', function() {
        var filesCount = el.files.length;
        if(filesCount === 1) {
            el.parentNode.querySelectorAll('.file-msg')[0].textContent = el.value.split('\\').pop();
        } else {
            var textSelected = 'files selected';
            if(el.parentNode.querySelectorAll('.file-msg')[0].dataset.selected) {
                textSelected = el.parentNode.querySelectorAll('.file-msg')[0].dataset.selected;
            }
            el.parentNode.querySelectorAll('.file-msg')[0].textContent = filesCount + ' ' + textSelected;
        }
        el.parentNode.classList.add('active');
    });
});

[].forEach.call(document.querySelectorAll('.password .icon-view'), function(el) {
    el.addEventListener('click', function() {
        var input = el.parentNode.getElementsByTagName('input')[0];
        if(!el.classList.contains('active')) {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
        input.focus();
        el.classList.toggle('active');
    });
});

// Selects

[].forEach.call(document.querySelectorAll('select.form-select'), function(el) {

    var classes = el.classList.value,
    id = el.id,
    name = el.name,
    value = el.options[el.selectedIndex].textContent,
    i;

    var wrapper = document.createElement('div');
    var template = '<span>' + value + '</span>';
    template += '<div>';
    for(i = 0; i < el.options.length; i++) {
        var active = '';
        if(value == el.options[i].innerHTML) {
            active = 'active';
        }
        template += '<span class="' + el.options[i].classList.value + ' ' + active + '" data-value="' + el.options[i].value + '">' + el.options[i].innerHTML + '</span>';
    }
    template += '</div>';

    wrapper.className = classes;
    wrapper.innerHTML = template;

    el.style.display = 'none';
    el.parentNode.insertBefore(wrapper, el);

});

[].forEach.call(document.querySelectorAll('.form-select:not(.disabled) > span'), function(el) {
    el.addEventListener('click', function(e) {
        document.addEventListener('click', function() {
            [].forEach.call(document.querySelectorAll('.form-select'), function(allFS) {
                allFS.classList.remove('open');
            });
        });
        el.parentNode.classList.toggle('open');
        e.stopPropagation();
    });
});

[].forEach.call(document.querySelectorAll('.form-select > div > span'), function(el) {
    el.addEventListener('click', function(e) {
        var div = el.parentNode.parentNode;
        var select = div.nextSibling;
        select.value = el.dataset.value;
        select.dispatchEvent(new Event('change'));
        var entries = el.parentNode.getElementsByTagName('span');
        for(i = 0; i < entries.length; i++) {
            entries[i].classList.remove('active');
        }
        setTimeout(function() {
            el.classList.add('active');
        }, 300);
        div.classList.remove('open');
        div.getElementsByTagName('span')[0].textContent = el.textContent;
    });
});

// classList Polyfill - Source: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
;(function() {
    var regExp = function(name) {
        return new RegExp('(^| )'+ name +'( |$)');
    };
    var forEach = function(list, fn, scope) {
        for (var i = 0; i < list.length; i++) {
            fn.call(scope, list[i]);
        }
    };
    function ClassList(element) {
        this.element = element;
    }
    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.className += ' '+ name;
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.className =
                    this.element.className.replace(regExp(name), '');
            }, this);
        },
        toggle: function(name) {
            return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };
    if(!('classList' in Element.prototype)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }
    if(window.DOMTokenList && DOMTokenList.prototype.replace == null) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();
