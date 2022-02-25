import { createMuiTheme } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#3f51b5",
			main: "#3f51b5",
			dark: "#3f51b5",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#ff7961",
			dark: "#f44336",
			contrastText: "#000",
		},
		// openTitle: teal["700"],
		// protectedTitle: orange["700"],
		type: "light",
	},
});

export default theme;
