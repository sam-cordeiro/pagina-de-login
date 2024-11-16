document.addEventListener('DOMContentLoaded', () => {
    const btnCadastro = document.getElementById('btnCadastro');

    if (btnCadastro) {
        btnCadastro.addEventListener('click', () => {
            const modal = document.getElementById('modal');
            modal.classList.remove('hidden');
        });
    }

    const closeModal = document.getElementById('closeModal');

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            const modal = document.getElementById('modal');
            modal.classList.add('hidden');
        });
    }

    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputTelefone = document.getElementById('telefone');
    const inputCPF = document.getElementById('cpf');
    const inputSenha = document.getElementById('senha');
    const toggleSenhaBtn = document.getElementById('toggleSenha');

    if (inputTelefone) {
        inputTelefone.addEventListener('input', function () {
            let telefone = this.value.replace(/\D/g, ''); // remove tudo que não for número
            if (telefone.length <= 2) {
                this.value = `(${telefone}`;
            } else if (telefone.length <= 7) {
                this.value = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
            } else {
                this.value = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
            }
        });
    }

    if (inputCPF) {
        inputCPF.addEventListener('input', function () {
            let cpf = this.value.replace(/\D/g, '');
            if (cpf.length <= 3) {
                this.value = `${cpf}`;
            } else if (cpf.length <= 6) {
                this.value = `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
            } else if (cpf.length <= 9) {
                this.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
            } else {
                this.value = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
            }
        });
    }

    if (inputEmail) {
        inputEmail.addEventListener('input', function () {
            let email = this.value;
            if (email.indexOf('@') === -1) {
                this.setCustomValidity('Email deve conter "@"');
            } else {
                this.setCustomValidity('');
            }
        });
    }

    const cadastroForm = document.getElementById('cadastroForm');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = inputNome.value;
            const email = inputEmail.value;
            const telefone = inputTelefone.value;
            const cpf = inputCPF.value;
            const senha = inputSenha.value;

            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('senha', senha);

            alert('Seu cadastro foi realizado!');
            const modal = document.getElementById('modal');
            modal.classList.add('hidden');

            window.location.href = 'perfil.html';
        });
    }

    const perfilForm = document.getElementById('perfilForm');

    if (perfilForm) {
        perfilForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = inputNome.value;
            const email = inputEmail.value;
            const telefone = inputTelefone.value;
            const cpf = inputCPF.value;
            const senha = inputSenha.value;

            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('senha', senha);

            alert('Alterações salvas com sucesso!');
        });
    }

    inputNome.value = localStorage.getItem('nome');
    inputEmail.value = localStorage.getItem('email');
    inputTelefone.value = localStorage.getItem('telefone');
    inputCPF.value = localStorage.getItem('cpf');
    inputSenha.value = localStorage.getItem('senha');
});
