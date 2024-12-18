The issue stemmed from overly restrictive Firebase security rules. The rules prevented client-side updates from propagating properly.  The solution involves loosening the security rules (carefully and with consideration for security best practices) to allow updates.  Additionally, verifying that the listener is correctly configured and handles the 'child_added' and 'child_changed' events is also important. Here's an example of a corrected listener:

```javascript
const database = firebase.database();
const ref = database.ref('myData');

ref.on('value', (snapshot) => {
  const data = snapshot.val();
  // Update your UI with the received data
  updateUI(data);
});

ref.on('child_added', (snapshot) => {
  // Handle child additions
  handleChildAddition(snapshot.val());
});

ref.on('child_changed', (snapshot) => {
  // Handle child changes
  handleChildChange(snapshot.val());
});
```

Remember to adjust the security rules in your Firebase console to allow read and write access for authenticated users or as needed for your application.