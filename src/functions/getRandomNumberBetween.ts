function getRandomNumberBetween(min: number, max: number): number {
    // Calculate the range of numbers
    const range = max - min;
    
    // Generate a random number between 0 and 1 (inclusive of 0, exclusive of 1)
    const randomFraction = Math.random();
    
    // Scale the random fraction to the desired range and add the minimum value
    const randomNumber = min + (randomFraction * range);
    
    return randomNumber;
  }
  
  export default getRandomNumberBetween;