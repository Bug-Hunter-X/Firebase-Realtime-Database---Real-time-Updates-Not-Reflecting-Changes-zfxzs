# Firebase Realtime Database - Real-time Update Issue

This repository demonstrates a bug encountered with Firebase's Realtime Database where real-time updates weren't reflected in the application. The initial data fetch worked correctly, but subsequent changes (made either through the Firebase console or another client) didn't update the UI.  The solution involves verifying the database rules and ensuring the correct listener is used.

## Bug

The `bug.js` file contains the original code that exhibits the described issue.  The application fetches data from the database, but fails to update dynamically in response to changes.

## Solution

The `bugSolution.js` file shows the corrected code. The solution involved verifying the Firebase security rules and ensuring that the `onValue` listener was properly configured to handle changes effectively. 