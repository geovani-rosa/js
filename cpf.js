class Cpf{
    constructor(cpf) {
        this.cpf = cpf.replace(/[^\w\s]/gi, '');
    }
    validarCpf(){
        var multiplicadores = [
            "10",
            "9",
            "8",
            "7",
            "6",
            "5",
            "4",
            "3",
            "2"
        ]
        var arr = [];
        for(var i=0;i<9;i++){

            arr.push(parseInt(this.cpf[i]) * parseInt(multiplicadores[i]));
        }
        var total = 0;
        $.each(arr, function( index, value ) {
            total += value;
        });
        total = total * 10 / 11;

        total = total.toString();
        total = total.split(".");
        var primeiroDigito = parseInt(total[1][0]) + 1;
        primeiroDigito = primeiroDigito == 10 ? 0 : primeiroDigito;
        if(primeiroDigito == this.cpf[9]){
            this.segundoDigito(this.cpf);
        } else{
            alert("CPF INVÁLIDO");
            return false;
        }
    }
    segundoDigito(digito){
        var cpf = this.cpf;
        this.cpf = this.cpf.substr(0,9)+digito;
        var multiplicadores = [
            "11",
            "10",
            "9",
            "8",
            "7",
            "6",
            "5",
            "4",
            "3",
            "2"
        ]
        var arr = [];
        for(var i=0;i<10;i++){
            arr.push(parseInt(this.cpf[i]) * parseInt(multiplicadores[i]));
        }
        var total = 0;
        $.each(arr, function( index, value ) {
            total += value;
        });
        total = total / 11;
        total = total.toString();
        total = total.split(".");
        var segundoDigito = parseInt(total[1][0]) + 1;
        segundoDigito = segundoDigito == 10 ? 0 : segundoDigito;
        if(segundoDigito != 0){
                segundoDigito = 11 - segundoDigito;
        }
        if(segundoDigito == cpf[10]){
            alert("CPF VÁLIDO");
        } else{
            alert("CPF INVÁLIDO");
        }
        
    }
}
$("button[name=validar]").click(function(){
    var validar = new Cpf($("input[name=cpf]").val());
    validar.validarCpf();
   
})