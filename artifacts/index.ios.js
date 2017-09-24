/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
export default class NativeTemplate extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome }, "Welcome to React Native!"),
            React.createElement(Text, { style: styles.instructions }, "To get started, edit index.ios.js"),
            React.createElement(Text, { style: styles.instructions },
                "Press Cmd+R to reload,",
                '\n',
                "Cmd+D or shake for dev menu")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('NativeTemplate', () => NativeTemplate);
//# sourceMappingURL=index.ios.js.map