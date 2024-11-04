// Fan Zone - Submit Story
function submitStory() {
    const name = document.getElementById("name").value;
    const player = document.getElementById("player").value;
    const story = document.getElementById("story").value;

    if (name && player && story) {
        alert(`Thank you, ${name}, for sharing your story about ${player}!`);
        document.getElementById("fan-form").reset();
    } else {
        alert("Please fill out all fields!");
    }
}

// Fan Zone - Voting for the Greatest Player
let voteCounts = {
    "Sachin Tendulkar": 0,
    "Virat Kohli": 0,
    "MS Dhoni": 0
};

function votePlayer(player) {
    if (voteCounts[player] !== undefined) {
        voteCounts[player]++;
        document.getElementById("vote-result").textContent = `${player} has received ${voteCounts[player]} votes.`;
    } else {
        alert("Player not found in voting list.");
    }
}
