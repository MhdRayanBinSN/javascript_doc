// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Rayan', email: 'rayan6203@gmail.com', degree: 'btech '});

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({name: 'rayan',age: '17'});
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green ; font: poppins';
console.log('%cHello World', styles);
