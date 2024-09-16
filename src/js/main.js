import "../style/style.scss";


//header
document.getElementById("copyText").addEventListener("click", function() {
    // Создаем временное текстовое поле
    var tempInput = document.createElement("input");
    tempInput.value = this.textContent;
    document.body.appendChild(tempInput);
  
    // Выделяем текст в текстовом поле
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Для мобильных устройств
  
    // Копируем выделенный текст в буфер обмена
    document.execCommand("copy");
  
    // Удаляем временное текстовое поле
    document.body.removeChild(tempInput);
  
    // Уведомление пользователя (можно кастомизировать)
    alert("Ссылка скопирована в буфер обмена!");
  });



  
  let add = document.getElementById("add");
  let register = document.getElementById("register");
  
  // Функция для сохранения состояния кнопок в localStorage
  function saveButtonState() {
      let state = {
          addBgColor: add.style.backgroundColor,
          addOpacity: add.style.opacity,
          registerBgColor: register.style.backgroundColor,
          registerOpacity: register.style.opacity
      };
      localStorage.setItem('buttonState', JSON.stringify(state));
  }
  
  // Функция для восстановления состояния кнопок из localStorage
  function restoreButtonState() {
      let savedState = JSON.parse(localStorage.getItem('buttonState'));
      if (savedState) {
          add.style.backgroundColor = savedState.addBgColor || '';
          add.style.opacity = savedState.addOpacity || '';
          register.style.backgroundColor = savedState.registerBgColor || '';
          register.style.opacity = savedState.registerOpacity || '';
      }
  }
  
  // Восстанавливаем состояние кнопок при загрузке страницы
  restoreButtonState();
  
  // Обработчик для кнопки "Объединить"
  add.addEventListener("click", function(event) {
      event.preventDefault(); // Останавливаем стандартное поведение ссылки временно
      add.style.backgroundColor = "#635ce8"; // Изменяем фон элемента с id "add"
      add.style.opacity = "inherit";
      register.style.backgroundColor = "#333"; // Изменяем фон элемента с id "register"
      register.style.opacity = ".6";
  
      // Сохраняем текущее состояние кнопок
      saveButtonState();
  
      // Задержка перед переходом по ссылке
      setTimeout(function() {
          window.location.href = add.href;
      }, 100); // Задержка в 100 миллисекунд
  });
  
  // Обработчик для кнопки "Создать новый"
  register.addEventListener("click", function(event) {
      event.preventDefault(); // Останавливаем стандартное поведение ссылки временно
      add.style.backgroundColor = ""; // Сбрасываем фон элемента с id "add"
      add.style.opacity = "";
      register.style.backgroundColor = ""; // Сбрасываем фон элемента с id "register"
      register.style.opacity = "";
  
      // Сохраняем текущее состояние кнопок
      saveButtonState();
  
      // Задержка перед переходом по ссылке
      setTimeout(function() {
          window.location.href = register.href;
      }, 100); // Задержка в 100 миллисекунд
  });
  
  