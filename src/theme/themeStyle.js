// --bg: #191d28;
// --button-heading: #3dc6c1;
// --text: #eaf2f6;
// --grey-menu-heading: #2E3241;
// --grey-light: #53565E;
// --light-mode-background: #f8f9fa;

export const lightTheme = {
    outermostCircle: {
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      background: "white",/*dark/light*/
      zIndex: "5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  count: {
      color:"#3dc6c1",/*dark/light*/
      fontWeight: "900"
  },
  cardOuter: {
      background: "var(--light-mode-background)"/*dark/light*/
    },
    td: {
      background: "var(--text)",
      color: "var(--bg)"
    },
  dropdownBasicButtonCoin: {
      background: "var(--text)",
      color: "var(--bg)"
    }
}
export const darkTheme = {
    outermostCircle: {
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      background: "var(--bg)",/*dark/light*/
      zIndex: "5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  count: {
      color:"var(--text)",/*dark/light*/
      fontWeight: "900"
  },
  cardOuter: {
      background: "var(--bg)"/*dark/light*/
    },
    td: {
      background: "var(--grey-menu-heading)",
      color: "var(--text)"
    },
  dropdownBasicButtonCoin: {
      background: "var(--grey-menu-heading)",
      color: "var(--text)"
    }
}