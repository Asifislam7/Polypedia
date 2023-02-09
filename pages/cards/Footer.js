import React from 'react'
import styles from '@/styles/Home.module.css'


const Footer = () => {
  return (
    <>
    <div>
         <div className={styles.sitefooter}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">freakin_fotechofficial<i> CODE WANTS TO BE SIMPLE </i>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsa distinctio aliquam quos consequatur libero laborum, dolores fuga quod ea,
                quibusdam beatae perspiciatis aperiam! Quam tempora vitae dicta delectus eaque incidunt?
                consectetur adipisicing elit. Ipsa distinctio aliquam quos consequatur libero laborum, dolores fuga quod ea,
                quibusdam beatae perspiciatis aperiam! Quam tempora vitae dicta delectus eaque incidunt?
                </p>
            </div>
      
      
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className={styles.footerlinks}>
                <li><a href="freakinfotech.com/category/c-language/">C</a></li>
                <li><a href="freakinfotech.com/category/front-end-development/">UI Design</a></li>
                <li><a href="freakinfotech.com/category/back-end-development/">PHP</a></li>
                <li><a href="freakinfotech.com/category/java-programming-language/">Java</a></li>
                <li><a href="freakinfotech.com/category/android/">Android</a></li>
                <li><a href="freakinfotech.com/category/templates/">Templates</a></li>
              </ul>
            </div>
      
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className={styles.footerlinks}>
                <li><a href="#">About Us</a></li>
                <li><a href="freakinfotech.com/contact/">Contact Us</a></li>
                <li><a href="freakinfotech.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="freakinfotech.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className={styles.copyrighttext}>Copyright &copy; 2021 All Rights Reserved by
                <a href="#"> Polypedia-a hand for help</a>.
              </p>
            </div>
      
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className={styles.socialicons}>
                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js"
integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
    </>
  )
}

export default Footer
