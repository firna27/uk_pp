const ppForm = document.getElementById("ppForm");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const tampil = document.getElementById("tampilContainer");

const hasilPp = JSON.parse(localStorage.getItem("pp")) || [];

const addPp = (panjang, lebar, hasil) => {
    hasilPp.push({
        panjang,
        lebar,
        hasil
    });

    localStorage.setItem("pp", JSON.stringify(hasilPp));

    return {panjang, lebar, hasil};
}

const buatPp = ({panjang, lebar, hasil}) => {
    
    const divPp = document.createElement("div");
    const panjang1 = document.createElement("p");
    const lebar1 = document.createElement("p");
    const hasil1 = document.createElement("h2");
    const hr = document.createElement("hr")

    panjang1.innerHTML = "panjang : " + panjang;
    lebar1.innerHTML = "lebar : " + lebar;
    hasil1.innerHTML = "Luas Persegi Panjang : " + hasil;

    divPp.append(panjang1, lebar1, hasil1, hr);
    tampil.appendChild(divPp);

};

hasilPp.forEach(buatPp);

ppForm.onsubmit = e => {
    e.preventDefault();

    const vPanjang = panjang.value;
    const vLebar = lebar.value;
    const Luas = vPanjang*vLebar;

    const PpBaru = addPp(
        vPanjang,
        vLebar,
        Luas
    );

    buatPp(PpBaru);

    panjang.value = "";
    lebar.value = "";

};
