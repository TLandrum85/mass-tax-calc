document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('taxForm');
    const result = document.getElementById('result');

    const taxRates = {
        MA: { under50k: 0.05, between50kAnd100k: 0.055, over100k: 0.06 },
        RI: { under50k: 0.0450, between50kAnd100k: 0.0550, over100k: 0.06 },
        CT: { under50k: 0.045, between50kAnd100k: 0.055, over100k: 0.06 },
        ME: { under50k: 0.058, between50kAnd100k: 0.0675, over100k: 0.0715 },
        VT: { under50k: 0.12, between50kAnd100k: 0.22, over100k: 0.24 },
        NH: { under50k: 0, between50kAnd100k: 0, over100k: 0 }
    };

    const calculateTax = (income, state) => {
        const rates = taxRates[state];
        if (income <= 50000) {
            return income * rates.under50k;
        } else if (income <= 100000) {
            return income * rates.between50kAnd100k;
        } else {
            return income * rates.over100k;
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const income = parseFloat(document.getElementById('income').value);
        const state = document.getElementById('state').value;
        
        const tax = calculateTax(income, state);
        
       const incomeAfterTax = income - tax;
        
        result.innerHTML = `
            <p><strong>Hello, ${name}!</strong></p>
            <p>Your estimated tax for ${state} is: $${tax.toFixed(2)}</p>
            <p>Your taxable annual income: $${income.toFixed(2)}</p>
            <p>Your income after taxes: $${incomeAfterTax.toFixed(2)}</p>
        `;
        result.classList.remove('hidden');
    });
});