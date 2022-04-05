import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-page'>

            <div>
                <h2>What is Context API ?</h2>
                <p>
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.o If we have a parent component with child components inside it and each child component has further child components, then to pass data from the parent component to the innermost child component we have to pass it through all the parent components of the innermost child component. This is known as prop drilling.This means even if any component is not using that prop, it has to receive that prop to pass it down to the child component. So to avoid this long chain of passing props through each level, we can use context API provided by React.So using Context API, the innermost child can directly access the prop data sent from the parent component just like the connect method of react-redux library.


                </p>
            </div>
            <div>
                <h2>What is Symantic Tag ?</h2>

                Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a <code>p</code> tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                On the flip side of this equation, tags such as <code>  ' b'  </code> and <code>i
                </code> are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.

                Examples of semantic HTML tags include:

                Header tags <code>h1</code> through <code>h6</code>
                <code>blockquote</code>


                There are many more semantic HTML tags to use as you build a standards-compliant website.
                The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.


            </div>
            <div>
                <h2>Inline vs Block vs Inline Block </h2>
                <p>
                    <p>
                        Inline The element doesn't start on a new line and only occupy just the width it requires. We can't set the width or height.Example : span,
                        a ,
                        img ,em,
                        strong,
                        i,
                        small
                    </p>
                    <p>
                        Inline-block It's formatted just like the inline element, where it doesn't start on a new line. BUT, we can set width and height values.
                    </p>
                    <p>
                        Block The element will start on a new line and occupy the full width available. And We can set width and height values.Example : div,
                        h1,
                        p,
                        li,
                        section,
                    </p>

                </p>
            </div>
        </div>
    );
};

export default Blogs;