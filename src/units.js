// https://www.w3.org/TR/css-values-4/
const _units = [
    // Length units
        // Relative length units
            // Font-relative length units
                'em',
                'ex',
                'cap',
                'ch',
                'ic',
                'rem',
                'lh',
                'rlh',
            // Viewport-percentage length units
                'vw',
                'vh',
                'vi',
                'vb',
                'vmin',
                'vmax',
        // Absolute length units
            'cm',
            'mm',
            'Q',
            'in',
            'pt',
            'pc',
            'px',
    // Angle units
    'deg',
    'grad',
    'rad',
    'turn',
    // Duration units
    's',
    'ms',
    // Frequency units
    'Hz',
    'kHz',
    // Resolution units
    'dpi',
    'dpcm',
    'dppx',
    'x',
    // Sort-of a unit
    '%' // Interpreted as a type by the CSS spec, but we can call it a unit for convenience.
];

module.exports = _units;