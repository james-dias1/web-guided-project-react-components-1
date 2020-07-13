// We need the state hook
import React from 'react'

// These constants could live in another module
const weapons = ['🗿', '📜', '✂️']

// It's less error-prone to work with variables than hard-coded strings
const [rock, paper, scissors] = weapons


export default function RockPaperScissors(props) {
  // 1- 👉👉👉 CREATE SLICES OF APPLICATION STATE (USING TOP-LEVEL COMPONENT STATE)

  // We need several slices of state, to keep track of:
  //   - the number of rounds played, start at 1
  //   - the number of 'wins', start at 0
  //   - the number of 'losses', start at 0
  //   - the 'message' displayed on the screen, start at 'Fight!'

  // 2- 👉👉👉 We DO NOT need a slice for rounds tied, as we can calculate that info using other slices
  // 3- 👉👉👉 REPLACE DOWN IN THE JSX THE HARD CODED PIECES OF DATA WITH PIECES OF STATE OR PROPS
  // 4- 👉👉👉 ATTACH IN THE JSX A CLICK HANDLER THAT UPDATES STATE ON USER INTERACTION


  const play = event => {
    // 5- 👉👉👉 IMPLEMENT THE 'play' HANDLER!

    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔
    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔
    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔

    // 5A- Update the round count

    // 5B- Pull out which weapon the user selected from the event.target
    // this is the player weapon

    // 5C- this is the computer weapon
    const computer = weapons[Math.floor(Math.random() * 3)]

    if (
      /* 5D- it's a LOSS */
      null
    ) {
      // - Update the losses
      // - Update the message
    } else if (
    /* 5E- it's a WIN */
      null
    ) {
      // - Update the wins
      // - Update the message
    } /* 5F- it's a TIE */ else {
      // - Update the message
    }
  }

  return (
    <div className='container'>
      <div className='player'>Welcome, {player}</div>
      {/* Replace hard-coded round */}
      <h2>Round: 1</h2>

      {/* Replace hard-coded stats */}
      <h3>won: 0 | lost: 0 | tied: 0</h3>
      <h1 className='message'>Fight!</h1>

      <div className='buttons'>
        <h3>Choose wisely:</h3>
        <div>
          <button name={rock}>{rock}</button>
          <button name={paper}>{paper}</button>
          <button name={scissors}>{scissors}</button>
        </div>
      </div>
    </div>
  )
}

// STRETCH- 👉👉👉 ADD A RESTART BUTTON, ANYTHING YOU CAN IMAGINE, BRING OTHER COMPONENTS...
