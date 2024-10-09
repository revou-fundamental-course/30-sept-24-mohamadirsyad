// function ini buat konversi Celsius ke Fahrenheit
function convertToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

// Fungsi untuk konversi Fahrenheit ke Celsius
function convertToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

// Fungsi untuk menampilkan kalkulasi dari Fahrenheit ke Celsius
function displayCelsiusConversion(fahrenheitInput, celsiusResult) {
  return `(${fahrenheitInput}°F - 32) × 5/9 = ${celsiusResult}°C`;
}

// Fungsi untuk menampilkan kalkulasi dari Celsius ke Fahrenheit
function displayFahrenheitConversion(celsiusInput, fahrenheitResult) {
  return `${celsiusInput}°C × 9/5 + 32 = ${fahrenheitResult}°F`;
}

// Event listener tombol Konversi dari Celcius ke Fahrenheit
document.getElementById("convert-btn").addEventListener("click", function () {
  const celsiusInput = document.getElementById("celcius").value;
  const kalkulasiText = document.getElementById("kalkulasi");

  // Validasi input: tidak boleh kosong dan harus angka
  if (celsiusInput && !isNaN(celsiusInput)) {
    const fahrenheitResult = convertToFahrenheit(parseFloat(celsiusInput));
    document.getElementById("fahrenheit").value = fahrenheitResult;
    kalkulasiText.value = displayFahrenheitConversion(
      celsiusInput,
      fahrenheitResult
    );
  } else {
    alert("Masukkan nilai suhu Celcius yang valid.");
  }
});

// Event listener tombol Reset
document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("celcius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("kalkulasi").value = "";
});

// Event listener tombol Reverse
document.getElementById("reverse-btn").addEventListener("click", function () {
  const celsiusInput = document.getElementById("celcius").value;
  const fahrenheitInput = document.getElementById("fahrenheit").value;

  document.getElementById("celcius").value = fahrenheitInput;
  document.getElementById("fahrenheit").value = celsiusInput;
});

// Event listener untuk tautan Fahrenheit ke Celsius
document
  .getElementById("fahrenheitToCelsius")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah halaman refresh

    // Tampilkan atau sembunyikan area input Fahrenheit ke Celsius
    const fahrenheitSection = document.getElementById("fahrenheit-section");
    if (fahrenheitSection.style.display === "none") {
      fahrenheitSection.style.display = "block";
    } else {
      fahrenheitSection.style.display = "none";
    }
  });

// Event listener tombol Konversi dari Fahrenheit ke Celsius
document
  .getElementById("convert-fahrenheit-btn")
  .addEventListener("click", function () {
    const fahrenheitInput = document.getElementById("fahrenheit-input").value;
    const kalkulasiText = document.getElementById("kalkulasi-fahrenheit");

    // Validasi input: tidak boleh kosong dan harus angka
    if (fahrenheitInput && !isNaN(fahrenheitInput)) {
      const celsiusResult = convertToCelsius(parseFloat(fahrenheitInput));
      document.getElementById("celcius-result").value = celsiusResult;
      kalkulasiText.value = displayCelsiusConversion(
        fahrenheitInput,
        celsiusResult
      );
    } else {
      alert("Masukkan nilai suhu Fahrenheit yang valid.");
    }
  });

// Event listener tombol Reset untuk Fahrenheit ke Celsius
document
  .getElementById("reset-fahrenheit-btn")
  .addEventListener("click", function () {
    document.getElementById("fahrenheit-input").value = "";
    document.getElementById("celcius-result").value = "";
    document.getElementById("kalkulasi-fahrenheit").value = "";
  });
