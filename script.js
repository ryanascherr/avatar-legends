let playbook;
let characters = [];

const adamant = {
    playbook: "adamant",
    feature: {
        name: "The Lodestone",
        description: `<p>There's only one person you usually let past your emotional walls.</p>
        <p><strong>Name your lodestar</strong> (choose a PC to start):__________</p>
        <p>You can shift your lodestar to someone new when they <strong>guide and comfort</strong> you and you open up to them, or when you <strong>guide and comfort</strong> them and they open up to you. If you do choose to shift your lodestar, clear a condition.</p>
        <p>When you <strong>shut down someone vulnerable to harsh words or icy silence</strong>, shift your balance toward Results and roll with Results. On a hit, they mark a condition and you may clear the same condition. On a 10+, they also cannot shift your balance or <strong>call you out</strong> for the rest of the scene. On a miss, they have exactly the right retort; mark a condition and they shift your balance. You cannot use this on your lodestar.</p>
        <p>When your lodestar <strong>shifts your balance</strong> or <strong>calls you out</strong>, you cannot resist it. Treat an NPC lodestar calling you out as if you rolled a 10+, and a PC lodestar calling you out as if they rolled a 10+.</p>
        <p>When you <strong>consult your lodestar for advice on a problem</strong> (or permission to use your preferred solution), roll with Restraint. On a 10+ take all three; on a 7-9 they choose two:</p>
        <ul>
            <li>You see the wisdom of their advice. They shift your balance; follow their advice and they shift your balance again.</li>
            <li>The conversation bolsters you. Clear a condition or 2-fatigue.</li>
            <li>They feel at ease offering their opinion. They clear a condition or 2-fatigue.</li>
        </ul>
        <p>On a miss, something about their advice infuriates you. Mark a condition or have the GM shift your balance twice.</p>`
    },
    stats: {
        creativity: 0,
        focus: 1,
        harmony: -1,
        passion: 1
    },
    connections: "<ul><li>__________ takes issue with my methods-perhaps they have a point, but I certianly can't admit that to them!</li><li>__________ is my lodestar; something about them makes them the one person I let my guard down around.",
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
        $(".focus").text(adamant.stats.focus);
        $(".harmony").text(adamant.stats.harmony);
        $(".passion").text(adamant.stats.passion);
        $(".connections-content").html(adamant.connections);
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

$(".connections-title").click(function() {
    $(".connections-content").toggle();
});