import React from 'react';
import './App.css';


function App() {
    return ( <
        div className = "App" > { /* Navigation bar */ }

        <
        nav className = "nav-bar" >
        <
        div className = "nav-logo" >
        <
        img src = "./yale-logo.png"
        alt = "Yale Logo" / >
        <
        h1 className = "nav-heading" > YALE < /h1><
        h4 className = "nav-heading sub" > School Of Arts < /h4> < /
        div > <
        ul className = "nav-links" >
        <
        li className = 'current' > < a href = "#" > Home < /a></li >
        <
        li > < a href = "#" > Campus < /a></li >
        <
        li > < a href = "#" > Admission < /a></li >
        <
        li > < a href = "#" > News < /a></li >
        <
        li > < a href = "#" > About Us < /a></li >
        <
        li > < a href = "#" > Contact < /a></li >
        <
        /ul> < /
        nav >

        { /* Banner */ } <
        section className = "banner" >
        <
        button > Apply Now < /button> < /
        section >

        { /* Newsletter tabs in boxes */ } <
        section className = "newsletter" >
        <
        div className = "newsletter" >
        <
        div className = "box" >
        <
        h2 > News 1 < /h2> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> <
        a href = "#" > Read More < /a> < /
        div > <
        div className = "box" >
        <
        h2 > News 2 < /h2> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> <
        a href = "#" > Read More < /a> < /
        div > <
        div className = "box" >
        <
        h2 > News 3 < /h2> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> <
        a href = "#" > Read More < /a> < /
        div > <
        div className = "box" >
        <
        h2 > News 4 < /h2> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> <
        a href = "#" > Read More < /a> < /
        div > <
        div className = "box" >
        <
        h2 > News 5 < /h2> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> <
        a href = "#" > Read More < /a> < /
        div > <
        /div> < /
        section >



        { /* Tables */ } <
        section className = "tables" >
        <
        h2 > Our Programs < /h2> <
        table >
        <
        thead >
        <
        tr >
        <
        th > Program < /th> <
        th > Duration < /th> <
        th > Tuition < /th> < /
        tr > <
        /thead> <
        tbody >
        <
        tr >
        <
        td > Master of Fine Arts < /td> <
        td > 2 years < /td> <
        td > $50, 000 per year < /td> < /
        tr > <
        tr >
        <
        td > Doctor of Fine Arts < /td> <
        td > 3 years < /td> <
        td > $60, 000 per year < /td> < /
        tr >
        <
        tr >
        <
        td > Master of Fine Arts < /td> <
        td > 2 years < /td> <
        td > $50, 000 per year < /td> < /
        tr > <
        tr >
        <
        td > Master of Fine Arts < /td> <
        td > 2 years < /td> <
        td > $50, 000 per year < /td> < /
        tr >
        <
        tr >
        <
        td > Master of Fine Arts < /td> <
        td > 2 years < /td> <
        td > $50, 000 per year < /td> < /
        tr > <
        tr >
        <
        td > Master of Fine Arts < /td> <
        td > 2 years < /td> <
        td > $50, 000 per year < /td> < /
        tr > <
        tr >
        <
        td > Master of Fine Arts < /td> <
        td > 2 years < /td> <
        td > $50, 000 per year < /td> < /
        tr > < /
        tbody > < /
        table > <
        /section>

        { /* Footer */ } <
        footer class = "footer" >
        <
        div class = "container" >
        <
        div class = "row" >
        <
        div class = "col-md-6" >
        <
        h4 class = "footer__heading" > Our Address < /h4> <
        p class = "footer__address" > 123 Main Street < /p> <
        p class = "footer__address" > Anytown, USA 12345 < /p> <
        p class = "footer__phone" > Phone: (123) 456 - 7890 < /p> < /
        div > <
        div class = "col-md-6" >
        <
        h4 class = "footer__heading" > Quick Links < /h4> <
        ul class = "footer__links" >
        <
        li > < a href = "/" > Home < /a></li >
        <
        li > < a href = "/about" > About Us < /a></li >
        <
        li > < a href = "/contact" > Contact Us < /a></li >
        <
        /ul> < /
        div > <
        /div> < /
        div > <
        /footer>




        <
        /div>
    );
}

export default App;