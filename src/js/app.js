export function sortHeroesByHealth(heroes) {
    if (!Array.isArray(heroes)) {
        throw new Error('Invalid input: Expected an array of heroes');
    }

    return [...heroes].sort((a, b) => b.health - a.health);
}
