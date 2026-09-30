# 💱 Currency Converter

A simple and responsive **Currency Converter** built using **HTML, CSS, and JavaScript (ES6)**.

The application allows users to enter an amount, select a source currency and a target currency, and get the converted amount using exchange-rate data from a currency API.

## ✨ Features

- **Amount Input:** Enter the amount you want to convert.
- **Multiple Currencies:** Currency options are populated dynamically from a currency-code list.
- **From & To Currency:** Select the source and target currencies easily.
- **Country Flags:** Displays the corresponding country flag for the selected currency.
- **Live Exchange Rates:** Fetches exchange-rate data from the Currency API.
- **Instant Conversion:** Calculates and displays the converted amount after clicking **Convert**.
- **Default Selection:** Starts with **USD → INR**.
- **Input Validation:** Empty or invalid amounts are reset to `1`.
- **Responsive UI:** Clean, centered interface designed for different screen sizes.

## 🛠️ Built With

- **HTML5** — Structure of the currency converter.
- **CSS3** — Layout, styling, input states, buttons, and responsive design.
- **JavaScript (ES6)** — DOM manipulation, API requests, currency selection, conversion logic, and event handling.
- **Currency API** — Used to retrieve exchange-rate data.
- **Flags API** — Used to display country flags.

## 📁 Project Structure

```text
currency-converter/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive layout
├── app.js          # Currency conversion logic
├── codes.js        # Currency and country-code mapping
└── README.md       # Project documentation
```

## 🧠 How It Works

1. The application loads currency codes from `codes.js`.
2. JavaScript dynamically creates the currency options in both dropdowns.
3. **USD** is selected by default as the source currency and **INR** as the target currency.
4. Changing a currency updates its corresponding country flag.
5. When **Convert** is clicked, the application requests exchange-rate data from the Currency API.
6. The selected exchange rate is retrieved.
7. The entered amount is multiplied by that rate.
8. The converted amount is displayed on the screen.

## 🔄 Conversion Flow

```text
Enter Amount
      ↓
Select From Currency
      ↓
Select To Currency
      ↓
Click Convert
      ↓
Fetch Exchange Rate
      ↓
Calculate Conversion
      ↓
Display Result
```

## 🌍 API

The project uses the Currency API endpoint:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies
```

The application creates the request according to the selected source currency and reads the target currency's exchange rate from the returned data.

## 💻 Run Locally

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Keep these files in the same folder:

```text
index.html
style.css
app.js
codes.js
```

4. Open `index.html` in your browser.

No backend setup is required.

## 🎨 UI

The interface uses a clean light theme with:

- Centered converter card
- Amount input field
- Currency dropdowns
- Country flags
- Conversion result message
- Full-width Convert button
- Focus, hover, and active states

## 👨‍💻 Author

**Hukam Singh Rathore**

Built as a beginner-friendly web development project to practice **HTML, CSS, JavaScript, DOM manipulation, APIs, asynchronous JavaScript, and dynamic UI updates**.
