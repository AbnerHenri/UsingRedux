import { createStackNavigator } from "@react-navigation/stack"

import Register from "../Screens/Register"
import About from "../Screens/About"

const Stack = createStackNavigator()

export default () => {
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}