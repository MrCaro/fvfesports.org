module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    mode: 'jit',
    theme: {
        container: {
            center: true,
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            spacing: {
                0: '0px',
                1: '0.0625rem',
                2: '0.125rem',
                3: '0.1875rem', 
                4: '0.25rem',
                6: '0.375rem',
                8: '0.5rem',
                10: '0.625rem',
                12: '0.75rem',
                14: '0.875rem',
                16: '1rem',
                20: '1.25rem',
                24: '1.5rem',
                28: '1.75rem',
                32: '2rem',
                36: '2.25rem',
                40: '2.5rem',
                44: '2.75rem',
                48: '3rem',
                52: '3.25rem', 
                56: '3.5rem',
                60: '3.75rem',
                64: '4rem',
                72: '4.5rem',
                80: '5rem',
                88: '5.5rem',
                96: '6rem',
                112: '7rem',
                128: '8rem',
                144: '9rem',
                160: '10rem',
                176: '11rem',
                192: '12rem',
                208: '13rem',
                224: '14rem',
                240: '15rem',
                256: '16rem',
                288: '18rem',
                320: '20rem',
                384: '24rem',
                448: '28rem', 
                512: '32rem'  
            },
            fontSize: {
                8: '0.5rem', 
                10: '0.625rem', 
                12: '0.75rem',
                14: '0.875rem',
                16: '1rem',
                18: '1.125rem',
                20: '1.25rem',
                22: '1.375rem', 
                24: '1.5rem',
                26: '1.625rem', 
                28: '1.75rem', 
                30: '1.875rem',
                32: '2rem', 
                36: '2.25rem',
                40: '2.5rem', 
                44: '2.75rem', 
                48: '3rem',
                52: '3.25rem', 
                56: '3.5rem', 
                60: '3.75rem',
                64: '4rem', 
                72: '4.5rem',
                80: '5rem', 
                88: '5.5rem', 
                96: '6rem',
                128: '8rem',
                160: '10rem' 
            },
            fontWeight: {
                100: '100',
                200: '200',
                300: '300',
                400: '400',
                500: '500',
                600: '600',
                700: '700',
                800: '800',
                900: '900'
            },
            lineHeight: {
                8: '0.5rem', // new
                10: '0.625rem', // new
                12: '0.75rem',
                14: '0.875rem', // new
                16: '1rem',
                18: '1.125rem', // new
                20: '1.25rem',
                22: '1.375rem', // new
                24: '1.5rem',
                26: '1.625rem', // new
                28: '1.75rem',
                30: '1.875rem', // new
                32: '2rem',
                36: '2.25rem',
                40: '2.5rem',
                44: '2.25rem', // new
                48: '3rem', // new
                52: '3.25rem', // new
                56: '3.5rem', // new
                60: '3.75rem', // new
                64: '4rem', // new
                72: '4.5rem', // new
                80: '5rem', // new
                88: '5.5rem', // new
                96: '6rem', // new
                128: '8rem', // new
                160: '10rem', // new
            },
            fontFamily: {
                main: ['changeling-neo-inline', 'sans-serif'],
                heading: ['changeling-neo', 'sans-serif'],
                display: ['droid-sans-mono', 'monospace'],
                action: ['dico-code-one', 'mono']
            },
            colors: {
                wine: {
                    light: '#f7005f',
                    default: '#f74f90',
                    dark: '#b00443'
                },
                green: '#46fe49',
                yellow: '#f3ff47',
                gray: {
                    light: '#f4f4f4',
                    default: '#989898',
                    dark: '#111111'
                }
            },
            transitionProperty: ['hover', 'focus'],
        },
        variants: {
            extend: {
                transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
            },
        },
    },
    plugins: [],
}