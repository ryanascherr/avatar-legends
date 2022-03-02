let playbook;
let characters = [];

const adamant = {
    playbook: "adamant",
    feature: {
        name: "The Lodestone",
        description: "Lodestone description"
    },
    stats: {
        creativity: 0,
        focus: 1,
        harmony: -1,
        passion: 1
    },
    moves: {
        move1: {
            name: "This Was A Victory",
            description: "lorem"
        },
        move2: {
            name: "Takes One To Know One",
            description: "lorem"
        },
        move3: {
            name: "No Time For Feelings",
            description: "lorem"
        },
        move4: {
            name: "I Don't Hate You",
            description: "lorem"
        },
        move5: {
            name: "Driven By Justice",
            description: "lorem"
        }
    }
}

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
        $(".feature-title").text(adamant.feature.name);
        $(".feature-content").html(adamant.feature.description);
        $(".creativity").text(adamant.stats.creativity);
    }
    if (playbook == "bold") {
        $(".feature-title").text("Legacy of Excellence");
        $(".feature-content").html("<p>Bold stuff</p>")
    }
    if (playbook == "guardian") {
        $(".feature-title").text("Protector's Burden");
        $(".feature-content").html("<p>Guardian stuff</p>")
    }
    if (playbook == "hammer") {
        $(".feature-title").text("Bringing Them Down");
        $(".feature-content").html("<p>Hammer stuff</p>")
    }
    if (playbook == "icon") {
        $(".feature-title").text("Burden and Tradition");
        $(".feature-content").html("<p>Icon stuff</p>")
    }
    if (playbook == "idealist") {
        $(".feature-title").text("Never Turn My Back");
        $(".feature-content").html("<p>Idealist stuff</p>")
    }
    if (playbook == "pillar") {
        $(".feature-title").text("Squad Leader");
        $(".feature-content").html("<p>Pillar stuff</p>")
    }
    if (playbook == "prodigy") {
        $(".feature-title").text("Extraordinary Skill");
        $(".feature-content").html("<p>Prodigy stuff</p>")
    }
    if (playbook == "rogue") {
        $(".feature-title").text("Bad Habits");
        $(".feature-content").html("<p>Rogue stuff</p>")
    }
    if (playbook == "successor") {
        $(".feature-title").text("A Tainted Past");
        $(".feature-content").html("<p>Successor stuff</p>")
    }

    $(".playbooks").addClass("hidden");
    $(".playbook-info").removeClass("hidden");
}

$(".feature-title").click(function() {
    $(".feature-content").toggle();
});

$(".stats-title").click(function() {
    $(".stats-content").toggle();
});