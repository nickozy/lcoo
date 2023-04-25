const PRICE_HELPER = 1;
const btnCheck = document.getElementById("checkout");

this.pay = function () {
  ////

  var receipt = {
    Items: [
      //товарные позиции
      {
        label: "Доступ к Helper", //наименование товара
        price: PRICE_HELPER, //цена
        quantity: PRICE_HELPER, //количество
        amount: PRICE_HELPER, //сумма
        method: 0, // тег-1214 признак способа расчета - признак способа расчета
        object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
      },
    ],
    taxationSystem: 1, //система налогообложения; необязательный, если у вас одна система налогообложения (1 = Упрощенная система налогообложения)
    isBso: false, //чек является бланком строгой отчетности
    amounts: {
      electronic: price, // Сумма оплаты электронными деньгами
      advancePayment: 0.0, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
      credit: 0.0, // Сумма постоплатой(в кредит) (2 знака после запятой)
      provision: 0.0, // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
    },
  };

  ////

  const orderNumber = uuid();
  const e = new cp.CloudPayments();
  const n = {};
  n.CloudPayments = {
    CustomerReceipt: receipt, //чек для первого платежа
    recurrent: {
      interval: "Month",
      period: 1,
      CustomerReceipt: receipt, //чек для регулярных платежей
    },
  }; //создание ежемесячной подписки

  var t = $("#telegram").val();

  e.charge(
    {
      publicId: "pk_d6b150530707bc6bfcf517768309e",
      description: "Подписка на Helper",
      amount: PRICE_HELPER,
      invoiceId: orderNumber, //номер заказа  (необязательно)
      skin: "modern",
      currency: "RUB",
      accountId: t,
      data: n,
    },
    function (e) {
      $(".form-submit").click();
      window.location.href =
        "https://gohelper.webflow.io/success-page?start=" + options.invoiceId;
    },
    function (e, n) {}
  );
};

function checkOut() {
  "" == $("#telegram").val() || pay();
}

btnCheck.addEventListener("click", checkOut),
  $(document).ready(function () {
    $("form").keydown(function (e) {
      if (13 == e.keyCode) return e.preventDefault(), !1;
    });
  });
