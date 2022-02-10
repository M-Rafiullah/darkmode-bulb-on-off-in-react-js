import React from "react";









const Darkmode = () => {
const [isDark, setDark] = useState(false);

return (
    <>


        <div className={isDark ? 'dark-mode' : 'light-mode'}>
            <div className="container">
                <span style={{ color: isDark ? 'yellow' : 'grey', fontSize: '50px' }}>*</span>

                <label className='switch'>
                    <div className="switch-checkbox">
                        <input type="checkbox"
                            onChange={() => setDark(!isDark)}
                        />

                        <span className='slider round'></span>
                    </div>
                </label>


                <span style={{ color: isDark ? '#c96dfd' : 'grey', fontSize: '35px' }}>☽</span>
            </div>
            <div>
                <h2 className='center'>It's {isDark ? 'Dark' : 'Light'} Mode</h2>
            </div>

           
        </div>
    </>)}

    export default Darkmode;