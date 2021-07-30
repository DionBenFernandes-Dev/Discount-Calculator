const bill = document.getElementById("bill_amount");

const result = document.querySelector(".display-lbl-result");
result.style.display = "none";

const discount = document.getElementById("discount_option");

function calculateDiscountBill() {
    const billAmount = parseInt(bill.value);
    const disPer = discount.value;
    var discountAmount;

    switch (disPer) {
        case "1":
            result.style.display = "none";
            alert("Please Select Dicount Coupon");
            discount.focus();
            break;

        case "3":
            discountAmount = billAmount - (billAmount * 0.25);
            break;

        case "4":
            discountAmount = billAmount - (billAmount * 0.5);
            break;

        case "5":
            discountAmount = billAmount - (billAmount * 0.75);
            break;

        default:
            discountAmount = billAmount;
            break;
    }

    return discountAmount;
}

const btn_calculate = document.querySelector(".btn-calculate");
btn_calculate.addEventListener("click",() => {
    if (isNaN(bill.value) == true) {
        result.style.display = "none";
        alert("Bill Amount must be a number.");
        bill.focus();
        bill.select();
    } else {
        if ( calculateDiscountBill() != undefined ) {
            result.innerHTML = calculateDiscountBill();
            result.style.display = "grid";
        }
    }
});
