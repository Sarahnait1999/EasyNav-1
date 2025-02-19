<!DOCTYPE html>
<html lang="en">
<head>
    <title>Profil</title>
    <?php include 'header.php' ?>

<body>
<div id="app">
    <div class="main-wrapper main-wrapper-1">
        <?php include 'navbar.php' ?>

      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Multiple Marker</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div class="breadcrumb-item"><a href="#">Google Maps</a></div>
              <div class="breadcrumb-item">Multiple Marker</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">Multiple Marker</h2>
            <p class="section-lead">
              Here is a simple example using the map, we use the plugin <code>gmaps.js</code> made by <a href="https://github.com/hpneo" target="_blank">@hpneo</a>. You can learn more about this plugin <a href="https://github.com/hpneo/gmaps" target="_blank">here</a>.
            </p>

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Multiple Marker</h4>
                  </div>
                  <div class="card-body">
                    <div id="map" data-height="400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        <?php include 'footer.php' ?>
    </div>
  </div>

<?php include 'footer-script.php' ?>
<script src="assets/js/page/gmaps-multiple-marker.js"></script>
</body>
</html>