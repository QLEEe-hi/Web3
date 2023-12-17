var input_BED = document.getElementById("kqBED");
function checkchuoi(bien) {
    let newbien = bien.replace(/,/g,'.');
    if (newbien.split('.').length - 1 >= 2) {  
      return 'Error'
    }
    for (let i = 0; i < newbien.length; i++) {
        if(isNaN(parseInt(newbien[i]))) {
            if(newbien[i] != '.') {  
              return 'Error'
            }
        }
    }
    return newbien;
}

function BED(){

    let PhanLieuEle =document.getElementById("PhanLieu");
    PhanLieuEle = checkchuoi(PhanLieuEle.value)
    console.log(PhanLieuEle)

    let TongLieuEle = document.getElementById("TongLieu");
    TongLieuEle = checkchuoi(TongLieuEle.value)
    console.log(TongLieuEle)
  
    let abEle = document.getElementById("ab");
    abEle = checkchuoi(abEle.value)


    if (PhanLieuEle<0 || TongLieuEle<0 || abEle < 0|| dk(TongLieuEle) ){
        alert('Hãy kiểm tra lại dữ liệu đã nhập vào');
        EQD2 = 0;
        BED = 0;
        return
    }

    let BED = Math.round((TongLieuEle*PhanLieuEle * (1 + PhanLieuEle/abEle))*100)/100;

    let EQD2 = Math.round(((TongLieuEle*PhanLieuEle*(1+(PhanLieuEle/abEle)))/(1+(2/abEle)))*100)/100;

    if (isNaN(BED)||isNaN(EQD2)){
        alert('Hãy kiểm tra lại dữ liệu đã nhập vào');
            EQD2 = 0;
            BED = 0;
    };
    document.getElementById("kqBED").value = BED.toString();
    document.getElementById("kqeqd2").value = EQD2.toString();
};

function dk(value){
    console.log(Number.isInteger(value));
    if(Number.isInteger(value)) {
        return true;
    }
    else{
    return false;
    };
};

function ChuyenDoi(){
    let n1 = document.getElementById("n1");
    n1 = parseFloat(checkchuoi(n1.value))

    let n2= document.getElementById("n2");
    n2 = checkchuoi(n2.value)
  
    let d1= document.getElementById("d1");
    d1 = parseFloat(checkchuoi(d1.value))

  
    let d2= document.getElementById("d2");
    d2 = parseFloat(checkchuoi(d2.value))
  
    let ab = document.getElementById("abcd");
    ab = checkchuoi(ab.value)  
  
    if(dk(n1) && d2>=0 && d1>=0 && ab>0){
        let kqn2 = Math.round(((n1*d1*(1+d1/ab)))/(d2*(1+d2/ab))*100)/100;
        document.getElementById("n2").value = kqn2.toString();
    }
    else{
        alert ("Hãy kiểm tra lại dữ liệu nhập vào");
        return
    };
};

function ChuyenDoi2(){
    let n21 = document.getElementById("n21");
    n21 = parseFloat(checkchuoi(n21.value))
    console.log(typeof n21)
    
    let n22= document.getElementById("n22");
    n22 = parseFloat(checkchuoi(n22.value))
    console.log(typeof n22)
  
    let d21 = document.getElementById("d21");
    d21 = parseFloat(checkchuoi(d21.value))
    console.log(typeof d21)
  
    let d22 = document.getElementById("d22");
    d22 = parseFloat(checkchuoi(d22.value))
    console.log(typeof d22)
  
    let ab2 = document.getElementById("abcd2");
    ab2 = parseFloat(checkchuoi(ab2.value))
    console.log(typeof ab2)  
  

    if(dk(n21) && dk(n22) && d21>=0 && ab2>0){
        let kqd22 = Math.round((parseFloat(Math.sqrt((ab2*((n21*d21)/n22)*(1+d21/ab2)+Math.pow((0.5*ab2),2)))-0.5*ab2))*100)/100;
        document.getElementById("d22").value = kqd22.toString();
        console.log(kqd22);
    }
    else{
        alert ("Hãy kiểm tra lại dữ liệu nhập vào");
        return
    };
};

function SuaSai(){
    let np = document.getElementById("np");
    np = parseFloat(checkchuoi(np.value));
    
    let dp = document.getElementById("dp");
    dp = parseFloat(checkchuoi(dp.value));
    
    let ne = document.getElementById("ne");
    ne = parseFloat(checkchuoi(ne.value));

    let de = document.getElementById("de");
    de = parseFloat(checkchuoi(de.value));
    console.log(de)


    if(dk(np) && dp>=0 && dk(ne) && de>=0 && np*dp>ne*de && !isNaN(np) && !isNaN(ne) && !isNaN(dp) && !isNaN(de)){
        let dc = Math.round((((np*dp*dp - ne*de*de)/(np*dp - ne*de))*100))/100;
        let nc = Math.round(((np*dp - ne*de)/dc)*100)/100;
        document.getElementById("nc").value = nc.toString();
        document.getElementById("dc").value = dc.toString();
    } else{
        alert("Hãy kiểm tra dữ liệu đã nhập vào");
        return
    };

}