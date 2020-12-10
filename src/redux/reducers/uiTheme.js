import { SET_THEME, NEXT_THEME } from "redux/actionTypes";
import { defaultThemeIndex, themes } from "styles/themes";

const initialState = {
	index: defaultThemeIndex,
	title: themes[defaultThemeIndex].title,
	path: themes[defaultThemeIndex].path
}

// selectors just for toopaging :)
// export const getTitle = (state) => (state.title);
// export const getGetPath = (state) => (state.path);

const uiTheme = (state = initialState, action) => {
		switch (action.type) {
			case SET_THEME:{
				const ndx = action.payload;
				return { index: ndx, title: themes[ndx].title, path: themes[ndx].path }
			}	
			case NEXT_THEME:{
				const ndx = state.index+1 >= themes.length ? 0 : state.index+1 ;
				return { index: ndx, title: themes[ndx].title, path: themes[ndx].path }
			}	
			default:
				return state;
		}
	};

export default uiTheme;