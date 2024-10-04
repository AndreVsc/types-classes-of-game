# Hero Game Documentation

## Overview

This application defines a hero class representing a character in an adventure game. Each hero has a name, age, and type (warrior, mage, monk, ninja). The hero can perform an attack, which will display a message according to their type.

## Hero Class Properties

- **name**: The name of the hero (string)
- **age**: The age of the hero (number)
- **type**: The type of hero (string)

## Attack Method

The `attack` method displays a message in the format:

```
The {type} attacked using {attack}
```

### Attack Types

| Hero Type | Attack Used          |
|-----------|----------------------|
| Mage      | Magic                |
| Warrior   | Sword                |
| Monk      | Martial Arts         |
| Ninja     | Shuriken             |

## Input/Output

### Output

A message indicating the type of attack performed by the hero.

### Example

**Input**:
```
Hero: Gandalf
Type: Mage
```

**Output**:
```
The Mage attacked using magic
```

## Implementation Details

The hero class uses a constructor to initialize properties and a method to determine the type of attack based on the hero type.

## Future Improvements

- Add more hero types and abilities.
- Implement a battle system between heroes.
- Allow users to create their own heroes through user input.