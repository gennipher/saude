import {createStackNavigtor} from "react-navigation";

import Main from "./pages/main";

export default createStackNavigtor({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },

});
