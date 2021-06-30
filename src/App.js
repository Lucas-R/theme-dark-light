import './App.css';

export default function App() {

  const getStyle = (style) => 
      window
        .getComputedStyle(document.body)
        .getPropertyValue(style)

  const initialColors = {
    primaryBg : getStyle("--primary-bg"),
    secondBg : getStyle("--second-bg"),
    primaryColor : getStyle("--primary-color")
  }

  const lightColors = {
    primaryBg : '#FAFAFA',
    secondBg : '#FFFFFF',
    primaryColor : '#323232'
  }

  const transformItem = item => "--" + item.replace(/([A-Z])/, "-$1").toLowerCase();

  const changeColors = (colors) => {
    Object.keys(colors).map(item =>
      document.body.style.setProperty(transformItem(item), colors[item])
    )
  }

  function handleTheme(e) {
    e.target.checked ? changeColors(lightColors) : changeColors(initialColors);
  }

  return (
    <>
      <div className="container">
        <nav>
          <label class="switch"> 
            <input value="checked" type="checkbox" onChange={handleTheme} />
            <span class="slider round"></span>
          </label>
        </nav>
        <div className="content-home">
          <h1 className="title-home"> Hello World </h1>
          <p className="desc-home"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
        </div>
      </div>
    </>
  );
}