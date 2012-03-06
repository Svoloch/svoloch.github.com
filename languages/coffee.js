/*
Language: Coffee
*/

hljs.LANGUAGES.coffee = {
  defaultMode: {
    lexems: [hljs.UNDERSCORE_IDENT_RE],
    contains: ['string', 'comment', 'number', 'regexp', 'javascript','symbol','bracket'],
    keywords: {
      'keyword': { 
		  'and': 1,
		  'break': 1,
		  'by': 1,
		  'case': 1,
		  'catch': 1,
		  'class':1,  
		  'continue': 1, 
		  'default': 1,    
		  'delete': 1, 
		  'do': 1, 
		  'else': 1,
		  'extends':1,
		  'for': 1, 
		  'finally': 1, 
		  //'function': 1,
		  'if': 1, 
		  'in': 1,
		  'instanceof': 1,
		  'is': 1,
		  'isnt' :1,
		  'loop':1,
		  'new': 1,
		  'not': 1,
		  'of':1,
		  'or': 1,
		  'return': 1, 
		  'switch': 1,
		  'then':1,
		  'this': 1, 
		  'throw': 1,
		  'try': 1,   
		  'typeof': 1, 
		  'unless':1,
		  'until': 1,
		  //'var': 1,  
		  //'void': 1, 
		  'while': 1,
		  'when': 1,
		  //'with': 1,
		  },
      'literal': {
		  'arguments':1,
		  'callee':1,
		  'constructor':1,
		  'prototype':1,
		  "__proto__":1,
		  'true': 1,
		  'false': 1,
		  'null': 1,
		  'yes':1,
		  'no':1,
		  'on':1,
		  'off':1,
		  'undefined':1,
		  "length": 1.
		  },
    }
  },
  modes: [
    {
      className: 'symbol',
      begin: "[\\+\\-\\*\\?\\.*/@%&|=.,;<>:!]+", end: hljs.IMMEDIATE_RE
    },
    {
      className: 'bracket',
      begin: "[\\(\\)\\[\\]\\{\\}]", end: hljs.IMMEDIATE_RE
    },
    {
      className:'string-escape',
      begin: '\\\\.', end: hljs.IMMEDIATE_RE, relevance: 0
    },
    {
      className:'regex-escape',
      begin: '\\\\.', end: hljs.IMMEDIATE_RE, relevance: 0
    },
    hljs.C_NUMBER_MODE,
    {
      className: 'string',
      begin: '\"\"\"', end: '\"\"\"',
      relevance: 10
    },
    {
      className: 'string',
      contains:['string-escape'],
      begin: '\"', end: '\"',
    },
    {
      className: 'string',
      begin: "\'\'\'", end: "\'\'\'",
      relevance: 10
    },
    {
      className: 'string',
      contains:['string-escape'],
      begin: "\'", end: "\'",
    },
    {
      className: 'javascript',
      begin:'`',
      end: '`', 
      subLanguage: 'javascript'
    },
    {
      className: 'comment',
      begin: '###', end: '###',
      relevance: 10
    },
    {
      className: 'comment',
      begin: '#', end: '$',
    },
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    
    hljs.BACKSLASH_ESCAPE,

    {
      className: 'regexp',
      //contains:['regexp-escape'],
      begin: '///.*?[^\\\\/]///[gim]*', end: hljs.IMMEDIATE_RE
    },
    {
      className: 'regexp',
      //contains:['regexp-escape'],
      begin: '/.*?[^\\\\/]/[gim]*', end: hljs.IMMEDIATE_RE
    },
       
  ]
};
