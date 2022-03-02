let playbook;


$(".playbook-select").click(function() {
    playbook = $(this).data("playbook");
    localStorage.setItem("playbook", playbook);
})