
document.addEventListener('DOMContentLoaded', function() {

    // Function to calculate battle outcome
    function calculateBattleOutcome(soldiers, cavalry, tanks, fortifications, terrain, buffs) {
        // Example calculation logic (to be expanded based on specific rules)
        let soldierStrength = soldiers * 1; // Example coefficient for soldier strength
        let cavalryStrength = cavalry * 1.5; // Cavalry has higher strength
        let tankStrength = tanks * 3; // Tanks have the highest strength

        // Terrain factor (simplified example)
        let terrainFactor = 1;
        switch (terrain) {
            case 'forest':
                cavalryStrength *= 0.8; // Cavalry less effective in forest
                break;
            case 'mountains':
                soldierStrength *= 0.7; // Soldiers less effective in mountains
                break;
            case 'urban':
                tankStrength *= 0.9; // Tanks less effective in urban areas
                break;
            // No change for 'plains'
        }

        // Calculate total strength
        let totalStrength = soldierStrength + cavalryStrength + tankStrength;

        // Factor in fortifications
        totalStrength += fortifications * 2; // Example fortification bonus

        // Random factor to add unpredictability
        let randomFactor = Math.random() * 0.2 + 0.9; // Randomness between 0.9 and 1.1
        totalStrength *= randomFactor;

        // Apply buffs (simple implementation)
        if (buffs.includes('extra_strength')) {
            totalStrength *= 1.1;
        }

        // Example outcome calculation
        let casualties = Math.round(soldiers * 0.3 + cavalry * 0.2 + tanks * 0.1); // Example casualty calculation
        return { winner: totalStrength > 100 ? 'Player' : 'Enemy', casualties: casualties };
    }

    // Handle form submission
    document.getElementById('input-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve and validate inputs
        let soldiers = parseInt(document.getElementById('soldiers').value) || 0;
        let cavalry = parseInt(document.getElementById('cavalry').value) || 0;
        let tanks = parseInt(document.getElementById('tanks').value) || 0;
        let fortifications = parseInt(document.getElementById('fortifications').value) || 0;
        let terrain = document.getElementById('terrain').value;
        let buffs = document.getElementById('buffs').value;

        // Calculate the battle outcome
        let outcome = calculateBattleOutcome(soldiers, cavalry, tanks, fortifications, terrain, buffs);

        // Display the result
        let resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Winner: ' + outcome.winner + '<br>Casualties: ' + outcome.casualties;
    });
});
