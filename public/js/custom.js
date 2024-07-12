document.querySelectorAll(".highlight").forEach(h => {
    const copyBtn = document.createElement("button");
    copyBtn.classList.add("copy-btn");
    copyBtn.title = "Copiar";

    const copyIcon = document.createElement("span");
    copyIcon.classList.add("icon");
    copyBtn.append(copyIcon);
    
    function readyToCopy() {
        copyIcon.innerHTML = '<i class="bi bi-clipboard"</i>';
    }

    function copyComplete() {
        copyIcon.innerHTML = '<i class="bi bi-clipboard-check"></i> Copiado!';
        setTimeout(readyToCopy, 2000);
    }

    function copyError() {
        copyIcon.innerHTML = '<i class="bi bi-clipboard-x"></i> ERRO!';
        setTimeout(readyToCopy, 2000);
    }
    
    function copyToClipboard() {
        navigator.clipboard.writeText(h.textContent)
            .then(copyComplete);
    }
    
    readyToCopy();
    copyBtn.addEventListener("click", copyToClipboard);
    h.append(copyBtn);
});