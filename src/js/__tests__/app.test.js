import { sortHeroesByHealth } from '../app';

describe('sortHeroesByHealth', () => {
    test('should sort heroes by health in descending order', () => {
        const heroes = [
            {
                name: 'мечник',
                health: 10
            },
            {
                name: 'маг',
                health: 100
            },
            {
                name: 'лучник',
                health: 80
            },
        ];
        const expected = [
            {
                name: 'маг',
                health: 100
            },
            {
                name: 'лучник',
                health: 80
            },
            {
                name: 'мечник',
                health: 10
            },
        ];
        expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });

    test('should not modify the original array', () => {
        const heroes = [
            {
                name: 'мечник',
                health: 10
            },
            {
                name: 'маг',
                health: 100
            },
            {
                name: 'лучник',
                health: 80
            },
        ];
        const original = [...heroes];
        sortHeroesByHealth(heroes);
        expect(heroes).toEqual(original);
    });

    test('should return an empty array if input is empty', () => {
        const heroes = [];
        const expected = [];
        expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });

    test('should throw an error if input is not an array', () => {
        const input = 'not an array';
        expect(() => sortHeroesByHealth(input)).toThrow('Invalid input: Expected an array of heroes');
    });

    test('should handle single-element arrays', () => {
        const heroes = [
            {
            name: 'маг',
            health: 100
            }
        ];
        const expected = [
            {
            name: 'маг',
            health: 100
            }
        ];
        expect(sortHeroesByHealth(heroes)).toEqual(expected);
    });
});
