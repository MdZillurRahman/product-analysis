import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='q-a'>
            <div>
                <h2>Question 1: What is Semantic tag?</h2>
                <p> <b>Answer: </b>Semantic HTML tags provide information about the contents of those tags which play a vital rule to make the website interactive. A semantic element clearly describes its meaning to both the browser and the developer.</p>
                <p>{'Example: <details>, <aside>, <article>, <figcaption>, <figure>,  <time>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <footer> etc.'}</p>
            </div>
            <br />
            <div>
                <h2>Question 2: Difference Between Inline elements and block elements.</h2>
                <p> <b>Answer: </b>
                    <table>
                        <tr>
                            <th>Inline Elements</th>
                            <th>Block Elements</th>
                        </tr>
                        <tr>
                            <td>Inline elements do not need a new line to begin in the document flow.</td>
                            <td>On the other hand, Block elements cause a line break to occur (although, as usual, this can be changed using CSS).</td>
                        </tr>
                        <tr>
                            <td>An inline element only takes up as much width as necessary.</td>
                            <td>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.</td>
                        </tr>
                        <tr>
                            <td>{'Example: <a>, <strong>, <em>, <b>, <i>, <q>, <mark>, <span> elements are all inline level elements.'}</td>
                            <td>{'Example: <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <ul>, <ol>, <dl>, <pre>, <hr />, <blockquote>, and <address> elements are all block level elements.'}</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
    );
};

export default Blogs;