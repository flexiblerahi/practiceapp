const TabSlider = () => {

    const selectPopup = () => {
        alert('youre are genious')

    }
    return(<><div className="slider tab-slider mb-35">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="tab-slider-wrapper">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="featured-tab" data-toggle="tab" href="#featured" role="tab"
                            aria-selected="true">Featured</a>
                            <a className="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals" role="tab"
                            aria-selected="false">New Arrival</a>
                            <a className="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale" role="tab"
                            aria-selected="false">On Sale</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                            {/* <!--=======  tab slider container  =======--> */}
                            
                            <div className="tab-slider-container">
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product01.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product02.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                    

                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product03.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image text-white">
                                            <a href="single-product.html">
                                                <span className="onsale">Kalu!</span>
                                                <img src="assets/assets_2/images/products/product04.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a onClick={selectPopup} data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                    

                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product05.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
{/* 
                                    <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product06.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}

                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product07.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product08.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}

                                {/* <!--=======  single tab slider item  =======--> */}

                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product09.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
{/* 
                                    <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product10.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                    

                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                            </div>

                            {/* <!--=======  End of tab slider container  =======--> */}
                        </div>
                        <div className="tab-pane fade" id="new-arrivals" role="tabpanel" aria-labelledby="new-arrival-tab">
                            {/* <!--=======  tab slider container  =======--> */}

                            <div className="tab-slider-container">
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}

                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product03.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======--> */}

                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product04.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!--=======  End of tab slider sub product  =======--> */}


                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product01.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product02.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                    

                                </div>
                                {/* <!--=======  End of single tab slider product  =======-->

                                <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product05.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product06.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}

                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product07.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product08.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}

                                {/* <!--=======  single tab slider item  =======--> */}

                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product09.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product10.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                    

                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                            </div>

                            {/* <!--=======  End of tab slider container  =======--> */}
                        </div>
                        <div className="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
                            {/* <!--=======  tab slider container  =======--> */}

                            <div className="tab-slider-container">
                                {/* <!--=======  single tab slider item  =======--> */}

                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}

                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product09.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======-->
 */}
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product10.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <!--=======  End of tab slider sub product  =======--> */}


                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product01.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product02.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                    

                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product03.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======-->

                                    <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product04.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                    

                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product05.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <img src="assets/assets_2/images/products/product06.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a className="active" href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}

                                {/* <!--=======  single tab slider item  =======--> */}
                                <div className="single-tab-slider-item">
                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product07.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                    {/* <!--=======  tab slider sub product  =======--> */}
                                    
                                    <div className="gf-product tab-slider-sub-product">
                                        <div className="image">
                                            <a href="single-product.html">
                                                <span className="onsale">Sale!</span>
                                                <img src="assets/assets_2/images/products/product08.jpg" className="img-fluid" alt=""/>
                                            </a>
                                            <div className="product-hover-icons">
                                                <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                </div>
                                {/* <!--=======  End of single tab slider product  =======--> */}
                            </div>

                            {/* <!--=======  End of tab slider container  =======--> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>)
}

export default TabSlider