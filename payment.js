// for payments

document.querySelectorAll('input[name="payment-method"]').forEach(input => {
    input.addEventListener('change', function() {
        document.querySelectorAll('.payment-inputs').forEach(div => {
            div.style.display = 'none';
        });
        const method = this.value;
        if (method === 'credit-card') {
            document.getElementById('credit-card-inputs').style.display = 'block';
        } else if (method === 'paypal') {
            document.getElementById('paypal-inputs').style.display = 'block';
        } else if (method === 'bank-transfer') {
            document.getElementById('bank-transfer-inputs').style.display = 'block';
        }
    });
});

function submitPayment() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    alert(`You have selected ${selectedMethod}. Please proceed with the payment.`);
}
