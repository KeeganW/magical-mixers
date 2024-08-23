import React, { useState } from 'react'
import { AppShell, Button, Flex } from '@mantine/core'

// const content = [
//   {
//     name: 'Mystic Mirror',
//     target: 'Area of Effect (People Nearby)',
//     description:
//       'Take a selfie with all nearby people striking poses. Bonus points for getting everyone at the event included!',
//   },
//   {
//     name: 'Diving Distilled',
//     target: 'Single',
//     description:
//       'The chosen person is bent, and has bubbles in their blood! They must drink a flat beverage to decompress. Who knew drinking and diving could be so dangerous?',
//   },
//   {
//     name: 'Nebulous Nostalgia',
//     target: 'Single (Anyone Sitting Down)',
//     description:
//       'The chosen person must share a nostalgic memory from their past with the bachelor, and then drink water for a parched throat. Revel in the warmth of magical reminiscence!',
//   },
//   {
//     name: 'Quick Quencher',
//     target: 'Single',
//     description:
//       'The chosen person must finish their drink in under a minute. Time is of the essence!',
//   },
//   {
//     name: 'Sensational Seer',
//     target: 'Single',
//     description:
//       'The chosen person must make a prediction about someone in the group, and then take a drink. What do you see in your crystal ball?',
//   },
//   {
//     name: 'Flaming Fireball',
//     target: 'Single',
//     description:
//       'The chosen person takes a shot of Fireball. If none is available, any drink will do. Lucky them.',
//   },
//   {
//     name: 'Harmonious Hooch',
//     target: 'Many (3)',
//     description:
//       'The spellcaster may choose up to 3 people who must take a shot with the spellcaster. Share the magical elixir and let the spirits align in camaraderie!',
//   },
//   {
//     name: 'Jocular Jinx',
//     target: 'Single',
//     description:
//       'The chosen person must challenge someone to a drinking game of their choice (such as a chugging contest). Engage in friendly competition and laughter!',
//   },
//   {
//     name: 'Lighting Bolt! Lightning Bolt! Lightning Bolt!',
//     target: 'Many (3)',
//     description:
//       'Choose 3 other people who must now clink cans and start drinking with the spellcaster; no one stops until the spellcaster does. Electrifying!',
//   },
//   {
//     name: 'Novel Nectar',
//     target: 'Single',
//     description:
//       "The chosen person must try a drink they've never had before. Expand your magical palate!",
//   },
//   {
//     name: 'Sneaky Spellsteal',
//     target: 'Single',
//     description:
//       'The chosen person must show all their current mixer spells, face down, to the spellcaster. The spellcaster may choose one spell at random to steal. Devious!',
//   },
//   {
//     name: 'Spellbinding Sip',
//     target: 'Single',
//     description:
//       'The chosen person must take a sip while striking a magical pose. Elegant and enchanting!',
//   },
//   {
//     name: 'Magical Memory',
//     target: 'Single',
//     description:
//       'The chosen person must name all the drinks they’ve had tonight. If they miss one, they take another drink. Hope your memory is solid!',
//   },
//   {
//     name: 'Number Nectar',
//     target: 'Area of Effect (People Nearby)',
//     description:
//       "The spellcaster must think of a number between 1 and 10. Each person nearby guesses before the spellcaster reveals the number; incorrect guessers take a sip. What's the lucky number?",
//   },
//   {
//     name: 'Silence Spell',
//     target: 'Single',
//     description:
//       'The chosen person must remain silent for one minute. If they speak or make a sound, they take a drink. Be quiet as a mouse!',
//   },
//   {
//     name: 'Reflection Ritual',
//     target: 'Single',
//     description:
//       'The chosen person must reflect on a happy memorable moment from the past year and take a drink. Cheers!',
//   },
//   {
//     name: 'Soothing Serendipity',
//     target: 'Single',
//     description:
//       'The chosen person must lead a toast with words of positivity and goodwill. Spread the magic!',
//   },
//   {
//     name: 'Brazen Bender',
//     target: '',
//     description:
//       'The chosen person must give the spellcaster a "Neat" mixer card. If they cannot, they must take a drink. Neat! *click*',
//   },
//   {
//     name: 'Competetive Clash',
//     target: '',
//     description:
//       'The chosen person and the spellcaster must play, Neat, Stirred, Shaken (rock, paper, scissors) by revealing a card from their hand at the same time. The loser takes a drink. Neat, Stirred, Shaken, shoot!',
//   },
//   {
//     name: 'Mystic Mirror',
//     target: 'Area of Effect (People Nearby)',
//     description:
//       'Take a selfie with all nearby people striking poses. Bonus points for getting everyone at the event included!',
//   },
//   {
//     name: 'Trivia Trial',
//     target: 'Single',
//     description:
//       'The chosen person must answer a trivia question about the bachelor. A wrong answer means they take a drink. How much do you know about them?',
//   },
//   {
//     name: 'Captivating Chronicle',
//     target: 'Single',
//     description:
//       'The chosen person must retell a story including the bachelor, and then drink water for a parched throat. Engage the audience with your storytelling prowess!',
//   },
//   {
//     name: 'Brotherly Brüderschaft',
//     target: 'Single',
//     description:
//       'The chosen person must recite a short oath to another person, then bind it by drinking a drink Brüderschaft style with them. Bonus points for creativity and theatrics!',
//   },
//   {
//     name: 'Enigmatic Elixirs',
//     target: 'Single',
//     description:
//       'The chosen person must take a shot of a mysterious, magical concoction created by the spellcaster. Bottoms up!',
//   },
//   {
//     name: 'Jubilant Journey',
//     target: 'Single',
//     description:
//       'The chosen person embarks on a quest to find and return an item of the spellcaster’s request (such as a fresh drink) within the venue. A magical journey awaits!',
//   },
//   {
//     name: 'Majestic Mixology',
//     target: 'Single',
//     description:
//       'The chosen person must invent and taste a new cocktail recipe that includes one ingredient specified by the spellcaster. Mix and mingle with style!',
//   },
//   {
//     name: 'Mysterious Mirage',
//     target: 'Single',
//     description:
//       'The chosen person must close their eyes and take a sip of whatever the spellcaster hands them. Do you trust your fellow friend?',
//   },
//   {
//     name: 'Mysterious Mix',
//     target: 'Single',
//     description:
//       'Choose at least 3 other people to pour a bit of their drink into a cup, and the chosen person must take a sip from the new concoction. Cheers to your creativity!',
//   },
//   {
//     name: 'Nimble Nectar',
//     target: 'Single',
//     description:
//       'The chosen person must craft a magical potion using three different drinks. Sip and savor the enchanting blend!',
//   },
//   {
//     name: 'Shadow Wizard, Money Gang',
//     target: 'Many (2)',
//     description:
//       'Choose two people to compare their most recent monetary transaction. Whichever has the higher recent transaction must take a hearty gulp. Ka-ching!',
//   },
//   {
//     name: 'Social Spritz',
//     target: 'Single',
//     description:
//       'The chosen person must bring a magical drink to someone they have known the shortest amount of time. Share your concoction and make a better friend!',
//   },
//   {
//     name: 'Sorcerer’s Survey',
//     target: 'Single',
//     description:
//       'The chosen person must take a quick survey of the group’s favorite drinks and take a sip of the most popular one. Group think!',
//   },
//   {
//     name: 'Gleeful Gambit',
//     target: 'Single',
//     description:
//       'The chosen person must roll a die. If they roll an even number, they take a sip; if odd, they nominate someone else to drink. Better blow on the dice for luck first!',
//   },
//   {
//     name: 'Die Die',
//     target: 'Many (6)',
//     description:
//       'Choose 6 people in order. Roll a die, and the person chosen by the number on the die must take a drink. No whammies, no whammies!',
//   },
//   {
//     name: 'Sparkling Sip',
//     target: 'Single',
//     description:
//       'The chosen person must take a sip and deliver a sparkling compliment to someone in the room. Make someone glow!',
//   },
//   {
//     name: 'Gleaming Goblet',
//     target: 'Single',
//     description:
//       "The chosen person must take a sip and toast to something they're grateful for. Gratitude is magical!",
//   },
//   {
//     name: 'Bold Bond',
//     target: '',
//     description:
//       'The chosen person must give the spellcaster a "Shaken" mixer card. If they cannot, they must take a drink. Shaken, not stirred.',
//   },
//   {
//     name: 'Competetive Clash',
//     target: '',
//     description:
//       'The chosen person and the spellcaster must play, Neat, Stirred, Shaken (rock, paper, scissors) by revealing a card from their hand at the same time. The loser takes a drink. Neat, Stirred, Shaken, shoot!',
//   },
//   {
//     name: 'Mystic Mirror',
//     target: 'Area of Effect (People Nearby)',
//     description:
//       'Take a selfie with all nearby people striking poses. Bonus points for getting everyone at the event included!',
//   },
//   {
//     name: 'Ratchet Rebus',
//     target: 'Single',
//     description:
//       "The chosen person must show a rebus riddle to the group. Whoever doesn't have the answer in 30 seconds takes a drink. Think fast!",
//   },
//   {
//     name: 'Tremendous Tidbit',
//     target: 'Single',
//     description:
//       'The chosen person must share an interesting tidbit or fact with the group about the bachelor, and then drink water for a parched throat. Knowledge is power!',
//   },
//   {
//     name: 'Gaming Growlers',
//     target: 'Area of Effect (People Nearby)',
//     description:
//       'All people nearby must go around in a circle naming board games or video games. First person to pause for more than 2 seconds must drink. How many do you know?',
//   },
//   {
//     name: 'Coy Clone',
//     target: 'Single',
//     description:
//       'The chosen person must temporarily copy the actions of another person nearby for 30 seconds, including any drinking they do. Have fun with the clone!',
//   },
//   {
//     name: 'Blue Eyes, White Claw',
//     target: 'Single',
//     description:
//       'The chosen person must find and shotgun any sparkling or carbonated beverage. Few have faced this awesome task and lived to tell the tale!',
//   },
//   {
//     name: 'Daring Draughts',
//     target: 'Single',
//     description:
//       "The chosen person must chug their drink until it's half-empty. May the foam be ever in your favor!",
//   },
//   {
//     name: 'Intoxicating Ice',
//     target: 'Single',
//     description:
//       'The chosen person must down a Smirnoff Ice. If none is available, any drink will do. Take a knee!',
//   },
//   {
//     name: 'Jester’s Privilege',
//     target: 'Single',
//     description:
//       'After the spellcaster makes someone laugh, show this spell and that person must take a hearty gulp of their drink. Hee hee hee!',
//   },
//   {
//     name: 'Jovial Jig',
//     target: 'Single',
//     description:
//       'The chosen person must finish their drink while dancing a dance of their choice. The dancing doesn’t stop until the drink is empty!',
//   },
//   {
//     name: 'Karmic Knowledge',
//     target: 'Single',
//     description:
//       'The chosen person must guess the spellcaster’s age. If they are wrong, they must finish their drink. If they are right, the spellcaster must finish their own. How well do you know them?',
//   },
//   {
//     name: 'King Gizzard and the Slizard Wizard',
//     target: 'Single',
//     description:
//       "The chosen person must shotgun a drink of the spellcaster’s choice. When we drink, we do it right gettin' slizard!",
//   },
//   {
//     name: 'Noxious Netherswap',
//     target: 'Single',
//     description:
//       'The chosen person must swap drinks with the spellcaster. Gimme that!',
//   },
//   {
//     name: 'Bustling Brewery',
//     target: 'Many (2)',
//     description:
//       "Choose two people to compare phone battery levels. Whichever has the lower battery level must take a hearty gulp. Stayin' alive!",
//   },
//   {
//     name: 'Spell Swap',
//     target: 'Single',
//     description:
//       "The chosen person can swap this spell with a random mixer spell from another player’s hand. The new recipient must take a drink. That's mine!",
//   },
//   {
//     name: 'Potion of Positivity',
//     target: 'Single',
//     description:
//       'The chosen person must give a positive affirmation to each person nearby, taking a sip after each one. Share the love!',
//   },
//   {
//     name: 'Chaotic Conflict',
//     target: '',
//     description:
//       'The chosen person must give the spellcaster a "Stirred" mixer card. If they cannot, they must take a drink. Stir the pot!',
//   },
//   {
//     name: 'Subtle Sleight',
//     target: '',
//     description:
//       'The spellcaster must name a mixer card type. If the choosen person does not have one of that kind, they must take a drink. Is this your card?',
//   },
//   {
//     name: 'Competetive Clash',
//     target: '',
//     description:
//       'The chosen person and the spellcaster must play, Neat, Stirred, Shaken (rock, paper, scissors) by revealing a random card from their hand at the same time as this card is revealed. The loser takes a drink. Neat, Stirred, Shaken, shoot!',
//   },
//   {
//     name: 'Charismatic Charade',
//     target: 'Area of Effect (People Nearby)',
//     description:
//       "The chosen person must engage in a charismatic charade, acting out a scene or scenario without speaking, and others nearby must guess what it is. Then, they sip some of Life's Essence (water) for breaking a sweat. Can you convey the magic without words?",
//   },
//   {
//     name: 'Bewitching Boogie',
//     target: 'Single',
//     description:
//       'The chosen person must bust out their best dance moves. Then, they sip a New York Rooftop (water) for breaking a sweat. Extra points for style!',
//   },
//   {
//     name: 'Animated Absinthe',
//     target: 'Single',
//     description:
//       'The chosen person must strike an interesting pose. Then, they sip some City Punch (water) because modeling is difficult. How would you rate the pose out of 10?',
//   },
//   {
//     name: 'Kinetic Kickback',
//     target: 'Single',
//     description:
//       "The chosen person must attempt a unique and entertaining party trick. After, they must drink some Diluted Ice (water) for showing off their hard-earned talent. Show us what you've got!",
//   },
//   {
//     name: 'Justified Jackpot',
//     target: 'Single',
//     description:
//       "The chosen person must pitch a startup to the spellcaster. If the spellcaster wants to invest, the pitcher must toast and drink with The River's Latest (water) for a job well done. Will they be your first VC?",
//   },
//   {
//     name: 'Lighthearted Libation',
//     target: 'Single',
//     description:
//       "The chosen person must tell a lighthearted joke. If no one laughs, they take a drink. If they make someone laugh, they drink some of Earth's Nectar (water). Laughter is the best potion!",
//   },
//   {
//     name: 'Krazy Karaoke',
//     target: 'Single',
//     description:
//       "The chosen person must sing a few lines from a song of their choice, then drink some of The Dam's Finest (water) to quench their thirst after. Bonus points for enthusiasm!",
//   },
//   {
//     name: 'Playful Polymorph',
//     target: 'Single',
//     description:
//       'The chosen person must temporarily adopt the personality and mannerisms of another person nearby, taking a sip of Greysdale Mead (water) after they are themselves again. An amusing magical transformation!',
//   },
//   {
//     name: 'Vivacious Vapor',
//     target: 'Single',
//     description:
//       'The chosen person must go on a quick, energetic lap around the party, then sip a Municipal Draught (water) for hydration. Zoom zoom!',
//   },
//   {
//     name: 'Wizardly Workout',
//     target: 'Single',
//     description:
//       'The chosen person must perform five jumping jacks, then take a sip of a Virgin Vodka (water). Magic comes from physical exertion too!',
//   },
//   {
//     name: 'Spellbound Story',
//     target: 'Single',
//     description:
//       'The chosen person must share a story including another person present, and then sip a Melted Snowman (water) for a parched throat. Bonus points for drama!',
//   },
//   {
//     name: 'Aqua Abyss',
//     target: 'Area of Effect (People Nearby)',
//     description:
//       'Anyone listening or nearby who has been in the ocean before must take a sip of a Blue Dolphin (water). Have you ever swam amongst dolphins? ',
//   },
//   {
//     name: 'Crystal Counterspell',
//     target: 'An incoming spell',
//     description:
//       'When a mixer spell is cast on you, instead of receiving the effect of the spell, take a big sip of your drink and reverse the effect of the spell back onto the spellcaster. Oops!',
//   },
//   {
//     name: 'Crystal Counterspell',
//     target: 'An incoming spell',
//     description:
//       'When a mixer spell is cast on you, instead of receiving the effect of the spell, take a big sip of your drink and reverse the effect of the spell back onto the spellcaster. Oops!',
//   },
//   {
//     name: 'Saving Spellshield',
//     target: 'Self',
//     description:
//       'When a spell is cast on you, you may choose to finish your drink instead of receiving the effect of the spell. Missed me!',
//   },
//   {
//     name: 'Saving Spellshield',
//     target: 'Self',
//     description:
//       'When a spell is cast on you, you may choose to finish your drink instead of receiving the effect of the spell. Missed me!',
//   },
// ]
export const Home: React.FC = () => {
  const [currentHand, setCurrentHand] = useState<string[]>([])

  function drawNewCard(): void {
    setCurrentHand(['test'])
  }
  return (
    <AppShell header={{ height: 40 }}>
      <AppShell.Header>
        <Flex gap="md" justify="center">
          <Button onClick={() => drawNewCard}>Draw New Card</Button>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Flex gap="md" justify="center">
          {currentHand.map(cardName => (
            <div>{cardName}</div>
          ))}
        </Flex>
        {/* <Image */}
        {/*    radius="md" */}
        {/*    src={WizardlyWorkout} */}
        {/* /> */}
      </AppShell.Main>
    </AppShell>
  )
}
