<template>
  <div class="cssload-spinner"></div>
</template>

<style lang="scss" scoped>
  .cssload-spinner {
    position: absolute;
    width: 32px;
    height: 32px;
    left: 50%;
    margin-left: -16px;
    margin-top: -16px;
  }
  .cssload-spinner:after,
  .cssload-spinner:before {
    position: absolute;
    content: '';
    border: 2px solid rgb(255, 255, 255);
    width: 30px;
    height: 30px;
  }
  .cssload-spinner:after {
    animation: cssload-spinner1 2.88s linear infinite;
    -o-animation: cssload-spinner1 2.88s linear infinite;
    -ms-animation: cssload-spinner1 2.88s linear infinite;
    -webkit-animation: cssload-spinner1 2.88s linear infinite;
    -moz-animation: cssload-spinner1 2.88s linear infinite;
  }
  .cssload-spinner:before {
    width: 42px;
    height: 42px;
    margin-left: -6.5px;
    margin-top: -6.5px;
    animation: cssload-spinner2 2.88s linear infinite;
    -o-animation: cssload-spinner2 2.88s linear infinite;
    -ms-animation: cssload-spinner2 2.88s linear infinite;
    -webkit-animation: cssload-spinner2 2.88s linear infinite;
    -moz-animation: cssload-spinner2 2.88s linear infinite;
  }

  @keyframes cssload-spinner1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes cssload-spinner1 {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(360deg);
    }
  }

  @-ms-keyframes cssload-spinner1 {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes cssload-spinner1 {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes cssload-spinner1 {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @keyframes cssload-spinner2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  @-o-keyframes cssload-spinner2 {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(-360deg);
    }
  }

  @-ms-keyframes cssload-spinner2 {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(-360deg);
    }
  }

  @-webkit-keyframes cssload-spinner2 {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(-360deg);
    }
  }

  @-moz-keyframes cssload-spinner2 {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(-360deg);
    }
  }
</style>
