/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

// Adds a message that welcomes new users into tha chat.
exports.addWelcomeMessages = functions.auth.user().onCreate(user => {
  console.log('A new user signed in for the first time.')
  const fullName = user.displayName || 'Anonymous'

  // Saves the new welcome message into the database
  // which then displays it in the FriendlyChat clients
  return admin.database().ref('messages').push({
    name: 'Firebase Bot',
    photoUrl: '/images/firebase-logo.png',
    text: `${fullName} signed in for the first time! Welcome!`,
  }).then(() => {
    console.log('Welcome message written to database.')
  })
})

// TODO(DEVELOPER): Write the blurOffensiveImages Function here.

// TODO(DEVELOPER): Write the sendNotifications Function here.
