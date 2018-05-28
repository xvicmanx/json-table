import React from 'react';
import PropTypes from 'prop-types';
import YAML from 'json2yaml';

let styles;

const getValue = v => {
  if (typeof v === 'string') {
    return (
      <span style={styles.valueColumn}>
        {JSON.stringify(v)}
      </span>
    );
  }

  return (
    <pre style={styles.valueColumn}>
      {YAML.stringify(v)
        .replace('---\n', '')
        .replace('---', '')}
    </pre>
  );
};

const JSONTable = ({ source }) => {
  return (
    <div style={styles.container}>
      {Object.keys(source).map(k => {
        return (
          <div style={styles.row} key={k}>
            <span style={styles.keyColumn}>{k}</span>
            {getValue(source[k])}
          </div>
        );
      })}
    </div>
  );
};

JSONTable.defaultProps = {
  source: PropTypes.instanceOf(Object).isRequired,
};

styles = {
  row: {
    border: '1px solid #eee',
    textAlign: 'left',
    borderRadius: '3px',
    margin: '.3rem 0',
    display: 'block',
    width: '100%'
  },
  keyColumn: {
    backgroundColor: '#efefef',
    padding: '1rem',
    display: 'inline-block',
    verticalAlign: 'top',
    height: '100%',
    fontWeight: 600
  },
  valueColumn: {
    padding: '1rem',
    display: 'inline-block',
    verticalAlign: 'top',
    margin: 0,
    wordWrap: 'break-word',
    fontSize: '1rem'
  },
  container: {
    padding: '1rem',
    border: '1px solid #eee'
  }
};

export default JSONTable;
