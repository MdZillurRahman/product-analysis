import React from 'react';

const Blogs = () => {
    return (
        <div className='Q-A'>
            <div>
                <h2>Question 1: What is Semantic tag?</h2>
                <p> <b>Answer: </b>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. A semantic element clearly describes its meaning to both the browser and the developer.</p>
                <p>Example: article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary, time etc.</p>
            </div>
            <div>
                <h2>Question 2: Difference Between Inline elements and block elements.</h2>
                <p> <b>Answer: </b>
                    <table className='table'>
                        <tr>
                            <th>Inline Elements</th>
                            <th>Block Elements</th>
                        </tr>
                        <tr>
                            <td> inline elements do not force a new line to begin in the document flow.</td>
                            <td>Block elements, on the other hand, typically cause a line break to occur (although, as usual, this can be changed using CSS).</td>
                        </tr>
                        <tr>
                            <td>An inline element only takes up as much width as necessary.</td>
                            <td>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
    );
};

export default Blogs;