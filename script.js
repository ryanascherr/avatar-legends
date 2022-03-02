let playbook;
let characters = [];

localStorage.setItem("playbook", "");

if (characters.length == 0) {
    $(".playbooks").removeClass("hidden");
    $(".your-characters").addClass("hidden");
}

$(".playbook-select").click(function() {
    playbook = $(this).data("playbook");

    localStorage.setItem("playbook", playbook);

    displayPlaybook();
})

function displayPlaybook() {

    if (playbook == "adamant") {
        $(".feature-title").html("The Lodestar &#8595;");
        $(".feature-content").html("<p>Adamant stuff</p>")
    }

    $(".playbooks").addClass("hidden");
    $(".playbook-info").removeClass("hidden");
}

$(".feature-title").click(function() {
    $(".feature-content").toggle();
})